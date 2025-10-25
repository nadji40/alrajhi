<script setup lang="ts">
// Try direct content query first
const { data: page } = await useAsyncData('index', async () => {
  try {
    // Try collection query first
    const collectionPage = await queryCollection('landing').path('/').first()
    if (collectionPage) return collectionPage

    // Fallback to direct content query
    return await queryContent('index').findOne()
  } catch (error) {
    console.error('Page query failed:', error)
    // Return null to trigger 404
    return null
  }
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png'
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    :prose="false"
  />
</template>
