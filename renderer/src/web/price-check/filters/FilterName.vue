<template>
  <div class="filter-name">
    <button class="px-2 rounded border"
      :class="{ 'border-gray-500': showAsActive, 'border-gray-900': !showAsActive }"
      @click="toggleAccuracy">{{ label }}</button>
    <button v-if="filters.corrupted" class="px-2" @click="corrupted = !corrupted">
      <span v-if="corrupted" class="text-red-500">{{ t('Corrupted') }}</span>
      <span v-else class="text-gray-600">{{ t('Not Corrupted') }}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { ParsedItem } from '@/parser'
import type { ItemFilters } from './interfaces'

export default defineComponent({
  name: 'FilterName',
  props: {
    filters: {
      type: Object as PropType<ItemFilters>,
      required: true
    },
    item: {
      type: Object as PropType<ParsedItem>,
      required: true
    }
  },
  setup (props) {
    const { t } = useI18n()

    const label = computed(() => {
      const { filters } = props
      const activeSearch = (filters.searchRelaxed && !filters.searchRelaxed.disabled)
        ? filters.searchRelaxed
        : filters.searchExact

      if (activeSearch.name) {
        return activeSearch.name
      }
      if (activeSearch.baseType) {
        return activeSearch.baseType
      }
      if (activeSearch.category) {
        return t(`Category: ${activeSearch.category}`)
      }

      return '??? Report if you see this text'
    })

    const showAsActive = computed(() => {
      const { filters } = props
      return filters.searchRelaxed?.disabled
    })

    function toggleAccuracy () {
      const { filters } = props
      if (filters.searchRelaxed) {
        filters.searchRelaxed.disabled = !filters.searchRelaxed.disabled
      }
    }

    const corrupted = computed<boolean>({
      get () { return props.filters.corrupted!.value },
      set (value) { props.filters.corrupted!.value = value }
    })

    return {
      t,
      label,
      showAsActive,
      toggleAccuracy,
      corrupted
    }
  }
})
</script>

<style lang="postcss">
.filter-name {
  @apply bg-gray-900 mb-2 rounded;
  line-height: 1.25rem;
  display: flex;
  justify-content: space-between;
}
</style>

<i18n>
{
  "ru": {
    "Corrupted": "Осквернен",
    "Not Corrupted": "Не осквернен",
    "Category: Abyss Jewel": "Категория: Самоцвет Бездны",
    "Category: Amulet": "Категория: Амулет",
    "Category: Belt": "Категория: Пояс",
    "Category: Body Armour": "Категория: Нательная броня",
    "Category: Boots": "Категория: Сапоги",
    "Category: Bow": "Категория: Лук",
    "Category: Claw": "Категория: Коготь",
    "Category: Dagger": "Категория: Кинжал",
    "Category: Fishing Rod": "Категория: Удочка",
    "Category: Flask": "Категория: Флакон",
    "Category: Gloves": "Категория: Перчатки",
    "Category: Helmet": "Категория: Шлем",
    "Category: Jewel": "Категория: Самоцвет",
    "Category: One-Handed Axe": "Категория: Одноручный топор",
    "Category: One-Handed Mace": "Категория: Одноручная булава",
    "Category: One-Handed Sword": "Категория: Одноручный меч",
    "Category: Quiver": "Категория: Колчан",
    "Category: Ring": "Категория: Кольцо",
    "Category: Rune Dagger": "Категория: Рунический кинжал",
    "Category: Sceptre": "Категория: Скипетр",
    "Category: Shield": "Категория: Щит",
    "Category: Staff": "Категория: Посох",
    "Category: Two-Handed Axe": "Категория: Двуручный топор",
    "Category: Two-Handed Mace": "Категория: Двуручная булава",
    "Category: Two-Handed Sword": "Категория: Двуручный меч",
    "Category: Wand": "Категория: Жезл",
    "Category: Warstaff": "Категория: Воинский посох",
    "Category: Cluster Jewel": "Категория: Кластерный самоцвет",
    "Category: Heist Blueprint": "Категория: Чертёж Кражи",
    "Category: Heist Contract": "Категория: Контракт Кражи",
    "Category: Heist Tool": "Категория: Разбойничий инструмент",
    "Category: Heist Brooch": "Категория: Разбойничья брошь",
    "Category: Heist Gear": "Категория: Разбойничьи принадлежности",
    "Category: Heist Cloak": "Категория: Разбойничья накидка",
    "Category: Trinket": "Категория: Украшение"
  },
  "ja": {
    "Corrupted": "コラプト状態",
    "Not Corrupted": "非コラプト",
    "Category: Abyss Jewel": "カテゴリ: アビスジュエル",
    "Category: Amulet": "カテゴリ: アミュレット",
    "Category: Belt": "カテゴリ: ベルト",
    "Category: Body Armour": "カテゴリ: 鎧",
    "Category: Boots": "カテゴリ: 靴",
    "Category: Bow": "カテゴリ: 弓",
    "Category: Claw": "カテゴリ: 鉤爪",
    "Category: Dagger": "カテゴリ: 短剣",
    "Category: Fishing Rod": "カテゴリ: 釣り竿",
    "Category: Flask": "カテゴリ: フラスコ",
    "Category: Gloves": "カテゴリ: 手袋",
    "Category: Helmet": "カテゴリ: 兜",
    "Category: Jewel": "カテゴリ: ジュエル",
    "Category: One-Handed Axe": "カテゴリ: 片手斧",
    "Category: One-Handed Mace": "カテゴリ: 片手メイス",
    "Category: One-Handed Sword": "カテゴリ: 片手剣",
    "Category: Quiver": "カテゴリ: 矢筒",
    "Category: Ring": "カテゴリ: 指輪",
    "Category: Rune Dagger": "カテゴリ: ルーンの短剣",
    "Category: Sceptre": "カテゴリ: セプター",
    "Category: Shield": "カテゴリ: 盾",
    "Category: Staff": "カテゴリ: スタッフ",
    "Category: Two-Handed Axe": "カテゴリ: 両手斧",
    "Category: Two-Handed Mace": "カテゴリ: 両手メイス",
    "Category: Two-Handed Sword": "カテゴリ: 両手剣",
    "Category: Wand": "カテゴリ: ワンド",
    "Category: Warstaff": "カテゴリ: ウォースタッフ",
    "Category: Cluster Jewel": "カテゴリ: Cluster Jewel",
    "Category: Heist Blueprint": "カテゴリ: 計画書",
    "Category: Heist Contract": "カテゴリ: 依頼書",
    "Category: Heist Tool": "カテゴリ: ハイストツール",
    "Category: Heist Brooch": "カテゴリ: ハイストブローチ",
    "Category: Heist Gear": "カテゴリ: ハイストギア",
    "Category: Heist Cloak": "カテゴリ: ハイストクローク",
    "Category: Trinket": "カテゴリ: 装身具"
  },
  "ui_ja": {
    "Corrupted": "コラプト状態",
    "Not Corrupted": "非コラプト",
    "Category: Abyss Jewel": "カテゴリ: アビスジュエル",
    "Category: Amulet": "カテゴリ: アミュレット",
    "Category: Belt": "カテゴリ: ベルト",
    "Category: Body Armour": "カテゴリ: 鎧",
    "Category: Boots": "カテゴリ: 靴",
    "Category: Bow": "カテゴリ: 弓",
    "Category: Claw": "カテゴリ: 鉤爪",
    "Category: Dagger": "カテゴリ: 短剣",
    "Category: Fishing Rod": "カテゴリ: 釣り竿",
    "Category: Flask": "カテゴリ: フラスコ",
    "Category: Gloves": "カテゴリ: 手袋",
    "Category: Helmet": "カテゴリ: 兜",
    "Category: Jewel": "カテゴリ: ジュエル",
    "Category: One-Handed Axe": "カテゴリ: 片手斧",
    "Category: One-Handed Mace": "カテゴリ: 片手メイス",
    "Category: One-Handed Sword": "カテゴリ: 片手剣",
    "Category: Quiver": "カテゴリ: 矢筒",
    "Category: Ring": "カテゴリ: 指輪",
    "Category: Rune Dagger": "カテゴリ: ルーンの短剣",
    "Category: Sceptre": "カテゴリ: セプター",
    "Category: Shield": "カテゴリ: 盾",
    "Category: Staff": "カテゴリ: スタッフ",
    "Category: Two-Handed Axe": "カテゴリ: 両手斧",
    "Category: Two-Handed Mace": "カテゴリ: 両手メイス",
    "Category: Two-Handed Sword": "カテゴリ: 両手剣",
    "Category: Wand": "カテゴリ: ワンド",
    "Category: Warstaff": "カテゴリ: ウォースタッフ",
    "Category: Cluster Jewel": "カテゴリ: Cluster Jewel",
    "Category: Heist Blueprint": "カテゴリ: 計画書",
    "Category: Heist Contract": "カテゴリ: 依頼書",
    "Category: Heist Tool": "カテゴリ: ハイストツール",
    "Category: Heist Brooch": "カテゴリ: ハイストブローチ",
    "Category: Heist Gear": "カテゴリ: ハイストギア",
    "Category: Heist Cloak": "カテゴリ: ハイストクローク",
    "Category: Trinket": "カテゴリ: 装身具"
  }
}
</i18n>
