<template>
  <section :class="$style.section">
    <SectionHeader icon="about-me" title="Обо мне" />
    <div :class="$style.aboutText">
      <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/molecules/SectionHeader.vue'

export default {
  name: 'AboutSection',
  components: {
    SectionHeader
  },
  props: {
    paragraphs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/scss/colors.scss';

.section {
  margin-bottom: 0;
}

.aboutText {
  p {
    font-size: 16px;
    line-height: 1.6;
    color: $main;
    margin: 0 0 15px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
