<template>
  <section :class="$style.workSection">
    <SectionHeader icon="work" title="Work Experience" />
    <div :class="$style.workList">
      <div
        v-for="(work, index) in workExperiences"
        :key="index"
        :class="[
          $style.workItemWrapper,
          index === workExperiences.length - 1 ? $style.fullWidth : ''
        ]"
      >
        <WorkItem
          :icon="work.icon"
          :company="work.company"
          :role="work.role"
          :period="work.period"
          :bullets="work.bullets"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import WorkItem from '@/components/molecules/WorkItem.vue'

export default {
  name: 'WorkExperienceSection',
  components: {
    SectionHeader,
    WorkItem
  },
  props: {
    workExperiences: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/scss/colors.scss';

.workSection {
  background-color: $primary;
  border-radius: 16px;
  padding: 20px;
}

.workList {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.workItemWrapper {
  width: 100%;
  max-width: 424px;
}

@media (max-width: 968px) {
  .workList {
    flex-direction: column;
  }
  .workItemWrapper {
    max-width: 100%;
  }
  .workSection {
    padding: 16px;
  }
  .workHeader {
    gap: 8px;
  }
}
</style>
