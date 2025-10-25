<template>
  <div ref="mermaidContainer" class="mermaid-diagram my-6 overflow-x-auto">
    <div v-if="loading" class="flex items-center justify-center p-8 text-gray-500">
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Loading diagram...
    </div>
    <div v-if="error" class="p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
      <p class="font-semibold">Error rendering diagram:</p>
      <p class="text-sm">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

interface Props {
  code: string
  language?: string
  filename?: string
  highlights?: number[]
  meta?: string
}

const props = defineProps<Props>()

const mermaidContainer = ref<HTMLElement>()
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    // Dynamic import to avoid SSR issues
    const mermaid = await import('mermaid')
    
    // Initialize mermaid with configuration
    mermaid.default.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
      themeVariables: {
        primaryColor: '#3b82f6',
        primaryTextColor: '#1f2937',
        primaryBorderColor: '#e5e7eb',
        lineColor: '#6b7280',
        secondaryColor: '#f3f4f6',
        tertiaryColor: '#ffffff',
        background: '#ffffff',
        mainBkg: '#ffffff',
        secondBkg: '#f9fafb',
        tertiaryBkg: '#f3f4f6'
      },
      sequence: {
        diagramMarginX: 50,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35,
        mirrorActors: true,
        bottomMarginAdj: 1,
        useMaxWidth: true,
        rightAngles: false,
        showSequenceNumbers: false
      }
    })

    await nextTick()
    await renderDiagram()
  } catch (err) {
    console.error('Error initializing mermaid:', err)
    error.value = err instanceof Error ? err.message : 'Failed to initialize diagram renderer'
    loading.value = false
  }
})

async function renderDiagram() {
  if (!mermaidContainer.value) return

  try {
    loading.value = true
    error.value = null

    // Generate unique ID for this diagram
    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
    
    // Clean the code - remove any extra whitespace and ensure proper formatting
    const cleanCode = props.code.trim()
    
    // Validate that it's a mermaid diagram
    if (!cleanCode.includes('sequenceDiagram') && !cleanCode.includes('graph') && !cleanCode.includes('flowchart')) {
      throw new Error('Invalid mermaid diagram syntax')
    }

    const mermaid = await import('mermaid')
    
    // Render the diagram
    const { svg } = await mermaid.default.render(id, cleanCode)
    
    // Insert the SVG into the container
    if (mermaidContainer.value) {
      mermaidContainer.value.innerHTML = svg
      
      // Add responsive styling to the SVG
      const svgElement = mermaidContainer.value.querySelector('svg')
      if (svgElement) {
        svgElement.style.maxWidth = '100%'
        svgElement.style.height = 'auto'
        svgElement.classList.add('mx-auto')
      }
    }
    
    loading.value = false
  } catch (err) {
    console.error('Error rendering mermaid diagram:', err)
    error.value = err instanceof Error ? err.message : 'Failed to render diagram'
    loading.value = false
    
    // Fallback: show the raw code in a code block
    if (mermaidContainer.value) {
      mermaidContainer.value.innerHTML = `
        <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code>${props.code}</code>
        </pre>
      `
    }
  }
}
</script>

<style scoped>
.mermaid-diagram {
  @apply border border-gray-200 rounded-lg p-4 bg-white;
}

.mermaid-diagram :deep(svg) {
  @apply mx-auto;
}

/* Mermaid sequence diagram styling */
.mermaid-diagram :deep(.actor) {
  @apply fill-blue-50 stroke-blue-300;
}

.mermaid-diagram :deep(.actor-line) {
  @apply stroke-blue-300;
}

.mermaid-diagram :deep(.messageLine0) {
  @apply stroke-gray-600;
}

.mermaid-diagram :deep(.messageLine1) {
  @apply stroke-gray-600;
}

.mermaid-diagram :deep(.messageText) {
  @apply fill-gray-700;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}

.mermaid-diagram :deep(.labelBox) {
  @apply fill-blue-50 stroke-blue-300;
}

.mermaid-diagram :deep(.labelText) {
  @apply fill-gray-800;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}

.mermaid-diagram :deep(.loopText) {
  @apply fill-gray-700;
}

.mermaid-diagram :deep(.loopLine) {
  @apply stroke-gray-400;
}

.mermaid-diagram :deep(.note) {
  @apply fill-yellow-50 stroke-yellow-300;
}

.mermaid-diagram :deep(.noteText) {
  @apply fill-gray-700;
}
</style>
