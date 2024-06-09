<template>
  <div>{{ pass }}</div>
</template>

<script lang="ts" setup>
import { hashPasswords } from "~/server/utils/hashPasswords"
const pass = hashPasswords("1231")
</script>
