<template>
  <div :class="$style.skillItem">
    <div :class="$style.skillInfo">
      <span>{{ name }}</span>
      <span>{{ percentage }}%</span>
    </div>
    <ProgressBar :percentage="percentage" />
  </div>
</template>

<script>
import ProgressBar from '@/components/atoms/ProgressBar.vue'

export default {
  name: 'SkillItem',
  components: {
    ProgressBar
  },
  props: {
    name: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 100
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/scss/colors.scss';

.skillItem {
  padding: 15px;
  background-color: $secondary;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skillInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: $main;

  span:first-child {
    font-weight: 500;
  }

  span:last-child {
    opacity: 0.8;
  }
}

@media (max-width: 968px) {
  .skillItem {
    padding: 10px 12px;
    gap: 8px;
    border-radius: 10px;
  }

  .skillInfo {
    font-size: 12px;
  }
}
</style>
