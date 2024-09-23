<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.NavbarSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="navbar"
  >
  <PrismicLink :field="slice.primary.first_link" class="link">home</PrismicLink>
  <PrismicLink :field="slice.primary.second_link" class="link">lorem ipsum</PrismicLink>
  <PrismicLink :field="slice.primary.third_link" class="link">sed ut</PrismicLink>
  <PrismicLink :field="slice.primary.fourth_link" class="link">at vero</PrismicLink>
  </section>
</template>

<style>
.navbar{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>