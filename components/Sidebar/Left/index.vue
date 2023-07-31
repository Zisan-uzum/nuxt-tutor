<script setup>
import { HomeIcon, ListBulletIcon, BookmarkIcon, UserCircleIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/solid'
</script>
<template>
    <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-start justify-center ">
            <!-- Page content here -->
            <label for="my-drawer-2" class="btn drawer-button lg:hidden">
                <ListBulletIcon />
            </label>

        </div>
        <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
                <li>
                    <SidebarLeftTabComponent route="/">
                        <template v-slot:icon>
                            <HomeIcon />
                        </template>
                        <template v-slot:name>
                            Home
                        </template>
                    </SidebarLeftTabComponent>
                </li>

                <li>
                    <!-- change props afterward -->
                    <SidebarLeftTabComponent route="/">
                        <template v-slot:icon>
                            <BookmarkIcon />
                        </template>
                        <template v-slot:name>
                            Favorite Recipes
                        </template>
                    </SidebarLeftTabComponent>
                </li>

                <li>
                    <!-- change props afterward -->

                    <SidebarLeftTabComponent route="/cuisines">
                        <template v-slot:icon>
                            <ChatBubbleLeftRightIcon />
                        </template>
                        <template v-slot:name>
                            Meet Tutors
                        </template>
                    </SidebarLeftTabComponent>
                </li>

                <li>
                    <SidebarLeftTabComponent route="/">
                        <template v-slot:icon>
                            <UserCircleIcon />
                        </template>
                        <template v-slot:name>
                            Profile
                        </template>
                    </SidebarLeftTabComponent>
                </li>

                <li>
                    <button class="btn text-lg">Inspire Us</button>
                </li>


            </ul>

        </div>
    </div>
</template>
