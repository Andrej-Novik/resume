<template>
  <div :class="$style.workItem">
    <div :class="$style.workHeader">
      <div :class="$style.workIdentity">
        <div :class="$style.workIcon">
          <ResumeIcon :src="icon" :alt="company" />
        </div>
        <div>
          <h3 :class="$style.workTitle">{{ company }}</h3>
          <p :class="$style.workRole">{{ role }}</p>
        </div>
      </div>
      <ResumeBadge :class="$style.workBadge">{{ period }}</ResumeBadge>
    </div>
    <div :class="$style.workDivider"></div>
    <ul :class="$style.workBullets">
      <li v-for="(bullet, index) in bullets" :key="index">{{ bullet }}</li>
    </ul>
  </div>
</template>

<script>
import ResumeIcon from '@/components/atoms/Icon.vue'
import ResumeBadge from '@/components/atoms/Badge.vue'

export default {
  name: 'WorkItem',
  components: {
    ResumeIcon,
    ResumeBadge
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    period: {
      type: String,
      required: true
    },
    bullets: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/fonts.scss';

.workItem {
  padding: 20px;
  background-color: $secondary;
  border-radius: 16px;
}

.workHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.workIdentity {
  display: flex;
  align-items: center;
  gap: 14px;
}

.workIcon {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $primary;
  border-radius: 12px;

  img {
    width: 26px;
    height: 26px;
  }
}

.workTitle {
  font-family: 'Futura', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: $main;
  margin: 0 0 4px 0;
}

.workRole {
  font-size: 14px;
  color: $main;
  margin: 0;
  opacity: 0.85;
}

.workBadge {
  margin-left: auto;
}

.workDivider {
  height: 2px;
  background-color: $main;
  opacity: 0.9;
  margin: 14px 0;
  border-radius: 2px;
}

.workBullets {
  margin: 0;
  padding-left: 18px;
  list-style-type: disc;

  li {
    font-size: 14px;
    line-height: 1.7;
    color: $main;
    margin-bottom: 6px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media (max-width: 968px) {
  .workItem {
    padding: 16px;
  }
  .workHeader {
    gap: 8px;
  }
  .workIdentity {
    gap: 8px;
  }
  .workTitle {
    font-size: 16px;
  }
  .workRole {
    font-size: 14px;
  }
  .workBadge {
    font-size: 12px;
  }
}
</style>
