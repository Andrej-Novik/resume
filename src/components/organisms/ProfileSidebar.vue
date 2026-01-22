<template>
  <aside :class="$style.sidebar">
    <div :class="$style.avatar">
      <img src="@/assets/img/avatar.jpg" alt="avatar" />
    </div>
    <div :class="$style.contactsHeader">
      <h2 :class="$style.contactsTitle">Контакты</h2>
      <div :class="$style.contactsLine"></div>
    </div>
    <div :class="$style.contacts">
      <ContactItem
        v-for="(contact, index) in contacts"
        :key="index"
        :icon="contact.icon"
        :text="contact.text"
        :href="contact.href"
      />
    </div>
  </aside>
</template>

<script>
import ContactItem from '@/components/molecules/ContactItem.vue'

export default {
  name: 'ProfileSidebar',
  components: {
    ContactItem
  },
  props: {
    contacts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/scss/colors.scss';

.sidebar {
  width: 100%;
  background-color: $primary;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.avatar {
  width: 100%;
  height: auto;
  overflow: hidden;
  max-height: 264px;
  border-radius: 16px 16px 0 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 968px) {
    max-height: 600px;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 16px;
  }
}

.contacts {
  display: grid;
  grid-template-columns: auto auto;
  gap: 24px;
  width: auto;
  margin: 0 16px 16px 16px;
}

.contactsHeader {
  width: 100%;
  padding: 20px;
}

.contactsTitle {
  font-size: 20px;
  font-weight: 700;
  color: $main;
  margin: 0 0 12px 0;
  font-family: 'Futura';
  font-weight: 500;
}

.contactsLine {
  width: 78px;
  height: 3px;
  background-color: $main;
  border-radius: 2px;
}

@media (max-width: 968px) {
  .contacts {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .contactsHeader {
    padding: 16px;
  }
}
</style>
