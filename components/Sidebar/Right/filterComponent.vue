<template>
    <div class="flex flex-col">

        <div class="form-control w-52" v-for="diet in Object.values(dietTypes)">
            <label class="cursor-pointer label">
                <span class="label-text text-lg font-semibold">{{ diet }}</span>
                <input type="checkbox" class="toggle toggle-primary" checked />
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">

enum dietTypes {
    GLUTENFREE = 'Gluten Free',
    VEGAN = 'Vegan',
    VEGETARIAN = 'Vegetarian',
    NONSUGAR = 'No Sugar'
}
</script>