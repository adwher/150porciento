<template>
    <router-view v-slot="{ Component }">
        <transition name="curtain-slide" mode="out-in">
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>