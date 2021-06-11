<template>
  <div class="selectContainer">
    <div class="languageSelect" @click="toggleLanguageBox">
      {{ $t("language.language") }}
      <i class="fas fa-caret-down space-left-md"></i>
    </div>
    <div class="languageBox" v-if="languageBoxOpen">
      <p
        class="language"
        v-for="language in languages"
        :key="language.locale_name"
        @click="changeLocaleValue(language.locale)"
      >
        {{ $t(`${language.locale_name}`) }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "LanguageSelect",
  data() {
    return {
      languages: [
        { locale_name: "language.english", locale: "en" },
        { locale_name: "language.japanese", locale: "ja" },
      ],
    };
  },
  computed: {
    ...mapState(["languageBoxOpen", "locale"]),
  },
  methods: {
    ...mapActions(["toggleLanguageBox", "changeLocale"]),
    changeLocaleValue(locale) {
      this.changeLocale(locale);
      this.$i18n.locale = locale;

      this.toggleLanguageBox();
    },
  },
};
</script>

<style scoped>
.languageSelect {
  color: #fff;
  position: relative;
}

.languageBox {
  background-color: #fff;
  padding: 10px 0px;
  width: 100px;
  position: absolute;
  top: 60px;
  border: 1px solid rgba(5, 116, 33, 0.7);
}

.language {
  margin: 10px 0 3px 0;
  padding: 0px 10px;
}

.language:hover {
  background-color: #eee;
}
</style>