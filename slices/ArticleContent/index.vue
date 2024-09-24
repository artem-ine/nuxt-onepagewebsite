<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { type HTMLRichTextMapSerializer } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ArticleTitleSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const serializer: HTMLRichTextMapSerializer = {
  preformatted: ({ children }) => `<code>${children}</code>`
}

</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  class="article">
    <span class="title">{{ slice.primary.article_title }}</span>
    <PrismicRichText :field="slice.primary.article_description" :html-serializer="serializer" class="description" />
    <PrismicImage :field="slice.primary.article_image" :imgix-params="{ sat: -30 }" class="article-image" />
    <span class="date">{{ slice.primary.article_date }}</span>
  </section>
</template>


<style>
.article{
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title{
  text-transform: capitalize;
  font-weight: bold;
}

.date{
  margin-top: 3px;
  align-self: baseline;
}

.article-image{
  width: 100%
}

</style>