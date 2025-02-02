<template>
  <button :class="[$style.btn, { [$style.active]: (active != null) ? active : !filter.disabled }]"
    @click="toggle"
  >
    <img v-if="img" :src="img" class="w-5 h-5">
    <span class="pl-1">{{ t(text) }}</span>
    <i v-if="collapse" class="pl-2 text-xs text-gray-400"
      :class="filter.disabled ? 'fas fa-chevron-down' : 'fas fa-chevron-up'" />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  emits: [], // mutates filter
  props: {
    filter: {
      type: Object as PropType<{ disabled: boolean }>,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    img: {
      type: String,
      default: undefined
    },
    readonly: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: undefined
    },
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const { t } = useI18n()
    return {
      t,
      toggle () {
        const { filter, readonly } = props
        if (!readonly) {
          filter.disabled = !filter.disabled
        }
      }
    }
  }
})
</script>

<style lang="postcss" module>
.btn {
  @apply bg-gray-900 rounded;
  @apply border border-transparent;
  @apply pl-1 pr-2;
  line-height: 1.25rem;
  display: flex;
  align-items: center;

  &.active {
    @apply border-gray-500;
  }
}
</style>

<i18n>
{
  "ru": {
    "Unidentified": "Неопознанный",
    "Veiled": "Завуалирован",
    "Blighted": "Заражённая",
    "Blight-ravaged": "Разорённая Скверной",
    "Mirrored": "Отражено",
    "Not Mirrored": "Не отражено",

    "Shaper": "Создатель",
    "Elder": "Древний",
    "Crusader": "Крестоносец",
    "Hunter": "Охотник",
    "Redeemer": "Избавительница",
    "Warlord": "Вождь",

    "Superior": "Высокого к-ва",
    "Anomalous": "Аномальный",
    "Divergent": "Искривлённый",
    "Phantasmal": "Фантомный"
  },
  "ja": {
    "Unidentified": "未鑑定",
    "Veiled": "Veiled",
    "Blighted": "荒廃した",
    "Blight-ravaged": "Blight-ravaged",
    "Mirrored": "ミラー状態",
    "Not Mirrored": "非ミラー",

    "Shaper": "シェイパー",
    "Elder": "エルダー",
    "Crusader": "聖戦者",
    "Hunter": "ハンター",
    "Redeemer": "贖い主",
    "Warlord": "大将軍",

    "Superior": "上質な",
    "Anomalous": "異常な",
    "Divergent": "相異の",
    "Phantasmal": "幻想の"
  },
  "ui_ja": {
    "Unidentified": "未鑑定",
    "Veiled": "Veiled",
    "Blighted": "荒廃した",
    "Blight-ravaged": "Blight-ravaged",
    "Mirrored": "ミラー状態",
    "Not Mirrored": "非ミラー",

    "Shaper": "シェイパー",
    "Elder": "エルダー",
    "Crusader": "聖戦者",
    "Hunter": "ハンター",
    "Redeemer": "贖い主",
    "Warlord": "大将軍",

    "Superior": "上質な",
    "Anomalous": "異常な",
    "Divergent": "相異の",
    "Phantasmal": "幻想の"
  },
  "zh_TW": {
    "Unidentified": "未鑑定",
    "Veiled": "隱匿",
    "Blighted": "凋落",
    "Blight-ravaged": "凋落蔓延的",
    "Mirrored": "已複製",
    "Not Mirrored": "未複製",

    "Shaper": "塑界者",
    "Elder": "尊師",
    "Crusader": "聖戰軍王",
    "Hunter": "狩獵者",
    "Redeemer": "救贖者",
    "Warlord": "總督軍",

    "Superior": "精良",
    "Anomalous": "異常",
    "Divergent": "相異",
    "Phantasmal": "幻影"
  },
  "zh_TW_GGC": {
    "Unidentified": "未鑑定",
    "Veiled": "隱匿",
    "Blighted": "凋落",
    "Blight-ravaged": "凋落蔓延的",
    "Mirrored": "已複製",
    "Not Mirrored": "未複製",

    "Shaper": "塑界者",
    "Elder": "尊師",
    "Crusader": "聖戰軍王",
    "Hunter": "狩獵者",
    "Redeemer": "救贖者",
    "Warlord": "總督軍",

    "Superior": "精良",
    "Anomalous": "異常",
    "Divergent": "相異",
    "Phantasmal": "幻影"
  }
}
</i18n>
