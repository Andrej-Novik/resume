<template>
  <div :class="$style.resume">
    <div :class="$style.container">
      <div :class="$style.topSection">
        <ProfileSidebar :class="$style.sidebarBlock" :contacts="resumeData.contacts" />

        <div :class="$style.nameBlock">
          <h1 :class="$style.name">{{ resumeData.personal.name }}</h1>
          <p :class="$style.title">{{ resumeData.personal.title }}</p>
        </div>

        <div :class="$style.aboutBlock">
          <AboutSection :paragraphs="resumeData.about" />
        </div>
      </div>

      <WorkExperienceSection :work-experiences="resumeData.workExperience" />
      <SkillsSection :skills-categories="resumeData.skills" />
      <EducationSection
        :period="resumeData.education.period"
        :text="resumeData.education.text"
      />
    </div>
  </div>
</template>

<script>
import { resumeData } from '@/data/resume.js'
import ProfileSidebar from '@/components/organisms/ProfileSidebar.vue'
import AboutSection from '@/components/organisms/AboutSection.vue'
import WorkExperienceSection from '@/components/organisms/WorkExperienceSection.vue'
import SkillsSection from '@/components/organisms/SkillsSection.vue'
import EducationSection from '@/components/organisms/EducationSection.vue'

export default {
  name: 'HomePage',
  components: {
    ProfileSidebar,
    AboutSection,
    WorkExperienceSection,
    SkillsSection,
    EducationSection
  },
  data() {
    return {
      resumeData
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/fonts.scss';

.resume {
  min-height: 100vh;
  background-color: $background;
  padding: 20px;
}

.container {
  max-width: 910px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.topSection {
  display: grid;
  grid-template-columns: 1.6fr 2fr;
  grid-template-rows: auto auto;
  gap: 20px;
}

.sidebarBlock {
  grid-column: 1;
  grid-row: 1 / span 2;
}

.nameBlock {
  background-color: $primary;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  grid-column: 2;
  grid-row: 1;
}

.name {
  font-family: 'Futura';
  font-weight: 700;
  font-size: 24px;
  color: $main;
}

.title {
  font-size: 20px;
  color: $main;
  margin: 0;
}

.aboutBlock {
  background-color: $primary;
  border-radius: 16px;
  padding: 20px;
  height: -webkit-fill-available;
  grid-column: 2;
  grid-row: 2;
}

@media (max-width: 968px) {
  .resume {
    padding: 16px;
  }
  .topSection, .nameBlock, .aboutBlock {
    gap: 16px;
  }

  .topSection {
    display: flex;
    flex-direction: column;
  }

  .nameBlock {
    flex-direction: column;
    align-items: center;
    order: 1;
    text-align: center;
    padding: 16px;
    gap: 10px;
  }

  .sidebarBlock {
    order: 2;
  }

  .aboutBlock {
    order: 3;
  }
  
  .name {
    font-size: 20px;
  }

  .title {
    font-size: 16px;
  }

  .nameBlock {
    padding: 16px;
  }
}
</style>
