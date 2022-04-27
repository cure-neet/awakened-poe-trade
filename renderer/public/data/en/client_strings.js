// @ts-check
/** @type{import('../../../src/assets/data/interfaces').TranslationDict} */
export default {
  RARITY_NORMAL: 'Normal',
  RARITY_MAGIC: 'Magic',
  RARITY_RARE: 'Rare',
  RARITY_UNIQUE: 'Unique',
  RARITY_GEM: 'Gem',
  RARITY_CURRENCY: 'Currency',
  RARITY_DIVCARD: 'Divination Card',
  MAP_TIER: 'Map Tier: ',
  RARITY: 'Rarity: ',
  ITEM_CLASS: 'Item Class: ',
  ITEM_LEVEL: 'Item Level: ',
  TALISMAN_TIER: 'Talisman Tier: ',
  GEM_LEVEL: 'Level: ',
  STACK_SIZE: 'Stack Size: ',
  SOCKETS: 'Sockets: ',
  QUALITY: 'Quality: ',
  PHYSICAL_DAMAGE: 'Physical Damage: ',
  ELEMENTAL_DAMAGE: 'Elemental Damage: ',
  CRIT_CHANCE: 'Critical Strike Chance: ',
  ATTACK_SPEED: 'Attacks per Second: ',
  ARMOUR: 'Armour: ',
  EVASION: 'Evasion Rating: ',
  ENERGY_SHIELD: 'Energy Shield: ',
  TAG_WARD: 'Ward: ',
  BLOCK_CHANCE: 'Chance to Block: ',
  CORRUPTED: 'Corrupted',
  UNIDENTIFIED: 'Unidentified',
  ITEM_SUPERIOR: /^Superior (.*)$/,
  MAP_BLIGHTED: /^Blighted (.*)$/,
  MAP_BLIGHT_RAVAGED: /^Blight-ravaged (.*)$/,
  INFLUENCE_SHAPER: 'Shaper Item',
  INFLUENCE_ELDER: 'Elder Item',
  INFLUENCE_CRUSADER: 'Crusader Item',
  INFLUENCE_HUNTER: 'Hunter Item',
  INFLUENCE_REDEEMER: 'Redeemer Item',
  INFLUENCE_WARLORD: 'Warlord Item',
  SECTION_SYNTHESISED: 'Synthesised Item',
  ITEM_SYNTHESISED: /^Synthesised (.*)$/,
  VEILED_PREFIX: 'Veiled Prefix',
  VEILED_SUFFIX: 'Veiled Suffix',
  FLASK_CHARGES: /^Currently has \d+ Charges$/,
  METAMORPH_HELP: "Combine this with four other different samples in Tane's Laboratory.",
  BEAST_HELP: 'Right-click to add this to your bestiary.',
  METAMORPH_BRAIN: /^.* Brain$/,
  METAMORPH_EYE: /^.* Eye$/,
  METAMORPH_LUNG: /^.* Lung$/,
  METAMORPH_HEART: /^.* Heart$/,
  METAMORPH_LIVER: /^.* Liver$/,
  CANNOT_USE_ITEM: 'You cannot use this item. Its stats will be ignored',
  QUALITY_ANOMALOUS: /^Anomalous (.*)$/,
  QUALITY_DIVERGENT: /^Divergent (.*)$/,
  QUALITY_PHANTASMAL: /^Phantasmal (.*)$/,
  AREA_LEVEL: 'Area Level: ',
  HEIST_WINGS_REVEALED: 'Wings Revealed: ',
  HEIST_TARGET: 'Heist Target: ',
  HEIST_BLUEPRINT_ENCHANTS: 'Enchanted Armaments',
  HEIST_BLUEPRINT_TRINKETS: 'Thieves\' Trinkets or Currency',
  HEIST_BLUEPRINT_GEMS: 'Unusual Gems',
  HEIST_BLUEPRINT_REPLICAS: 'Replicas or Experimented Items',
  MIRRORED: 'Mirrored',
  MODIFIER_LINE: /^(?<type>[^"]+)(?:\s+"(?<name>[^"]+)")?(?:\s+\(Tier: (?<tier>\d+)\))?(?:\s+\(Rank: (?<rank>\d+)\))?$/,
  PREFIX_MODIFIER: 'Prefix Modifier',
  SUFFIX_MODIFIER: 'Suffix Modifier',
  CRAFTED_PREFIX: 'Master Crafted Prefix Modifier',
  CRAFTED_SUFFIX: 'Master Crafted Suffix Modifier',
  UNSCALABLE_VALUE: ' — Unscalable Value',
  CORRUPTED_IMPLICIT: 'Corruption Implicit Modifier',
  MODIFIER_INCREASED: /^(.+?)% Increased$/,
  INCURSION_OPEN: 'Open Rooms:',
  INCURSION_OBSTRUCTED: 'Obstructed Rooms:',
  EATER_IMPLICIT: /^Eater of Worlds Implicit Modifier \((?<rank>.+)\)$/,
  EXARCH_IMPLICIT: /^Searing Exarch Implicit Modifier \((?<rank>.+)\)$/,
  ELDRITCH_MOD_R1: 'Lesser',
  ELDRITCH_MOD_R2: 'Greater',
  ELDRITCH_MOD_R3: 'Grand',
  ELDRITCH_MOD_R4: 'Exceptional',
  ELDRITCH_MOD_R5: 'Exquisite',
  ELDRITCH_MOD_R6: 'Perfect',
  // ---
  CHAT_SYSTEM: /^: (?<body>.+)$/,
  CHAT_TRADE: /^\$(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_GLOBAL: /^#(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_PARTY: /^%(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_GUILD: /^&(?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_WHISPER_TO: /^@To (?<char_name>.+?): (?<body>.+)$/,
  CHAT_WHISPER_FROM: /^@From (?:<(?<guild_tag>.+?)> )?(?<char_name>.+?): (?<body>.+)$/,
  CHAT_WEBTRADE_GEM: /^level (?<gem_lvl>\d+) (?<gem_qual>\d+)% (?<gem_name>.+)$/
}
