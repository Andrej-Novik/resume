<template>
  <section :class="$style.skillsSection">
    <div :class="$style.skillsHeader">
      <SectionHeader icon="skills" title="Технологии" />
      <div :class="$style.colorLegend">
        <div :class="$style.legendItem">
          <div :class="[$style.legendColor, $style.legendRed]"></div>
          <span>0%-30%</span>
        </div>
        <div :class="$style.legendItem">
          <div :class="[$style.legendColor, $style.legendOrange]"></div>
          <span>30%-60%</span>
        </div>
        <div :class="$style.legendItem">
          <div :class="[$style.legendColor, $style.legendGreen]"></div>
          <span>60%-100%</span>
        </div>
      </div>
    </div>

    <div
      v-for="(category, index) in skillsCategories"
      :key="index"
      :class="$style.skillsCategory"
    >
      <h3 :class="$style.skillsCategoryTitle">{{ category.title }}</h3>
      <div :class="$style.skillsList">
        <SkillItem
          v-for="(skill, skillIndex) in category.skills"
          :key="skillIndex"
          :name="skill.name"
          :percentage="skill.percentage"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/molecules/SectionHeader.vue'
import SkillItem from '@/components/molecules/SkillItem.vue'

export default {
  name: 'SkillsSection',
  components: {
    SectionHeader,
    SkillItem
  },
  props: {
    skillsCategories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/fonts.scss';

.skillsSection {
  background-color: $primary;
  border-radius: 20px;
  padding: 30px;
}

.skillsHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
}

.colorLegend {
  display: flex;
  gap: 15px;
  align-items: center;
}

.legendItem {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: $main;
}

.legendColor {
  width: 20px;
  height: 12px;
  border-radius: 4px;
}

.legendRed {
  background-color: #FF4444;
}

.legendOrange {
  background-color: #FFA500;
}

.legendGreen {
  background-color: #00C851;
}

.skillsCategory {
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
}

.skillsCategoryTitle {
  font-family: 'Futura LT', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: $main;
  margin: 0 0 15px 0;
}

.skillsList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

@media (max-width: 968px) {
  .skillsSection {
    padding: 16px;
  }
  .skillsHeader {
    gap: 12px;
    margin-bottom: 12px;
    align-items: center;
    flex-wrap: wrap;
  }

  .colorLegend {
    gap: 12px;
    flex-wrap: wrap;
  }

  .skillsList {
    grid-template-columns: 1fr 1fr;
  }

  .legendItem {
    flex-direction: column-reverse;
    align-items: center;
    margin: 0 0 10px 0;
    span {
      font-size: 12px;
    }
  }

  .legendColor {
    width: 60px;
    height: 4px;
    border-radius: 6px;
  }

  .skillsCategoryTitle {
    font-size: 14px;
  }
}
</style>
