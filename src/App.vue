<template>
  <v-app>
    <v-app-bar> </v-app-bar>
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> 신규 모바일 커뮤니케이션 솔류션 </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <template v-for="item in items" :key="item.title" >
        <v-list-item v-if="item.title" link :to="item.to" >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider
              v-else-if="item.divider"
              :key="index"
            ></v-divider>
            <v-subheader
              v-else-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>


          </template>
        
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
        { title: "회원 관리", icon: "mdi-view-dashboard", to: "/Admin" },


        { title: "부서별", icon: "mdi-image", to: "/host/0" },
        { title: "선호도", icon: "mdi-image", to: "/host/1" },
        { title: "OX", icon: "mdi-image", to: "/host/2" },
        { title: "카운팅", icon: "mdi-image", to: "/host/3" },
        { title: "달력형", icon: "mdi-image", to: "/host/4" },
        { title: "성배", icon: "mdi-image", to: "/host/5" },

  

        { title: "회원", icon: "mdi-image", to: "/peer/010-8542-9052" },

        {
          title: "카운터",
          icon: "mdi-image",
          to: "/peer/010-8542-9052/counter",
        },
        { title: "Debug", icon: "mdi-image", to: "/debug" },
        { divider: true },
        { header: "Labels" },
        { title: "Debug", icon: "mdi-image", to: "/debug" },
        { title: "Debug", icon: "mdi-image", to: "/debug" },
        { title: "Debug", icon: "mdi-image", to: "/debug" },
        { title: "Debug", icon: "mdi-image", to: "/debug" },
      ],
    };
  },
};
</script>