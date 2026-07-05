// Custom Theme - Extending Default VitePress Theme
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import ReleaseNotes from "./components/ReleaseNotes.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ReleaseNotes', ReleaseNotes)
  }
};
