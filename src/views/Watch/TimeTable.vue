<template>
  <v-card flat>
    <v-container fluid class="pa-4 d-flex" style="height: 120px">
      <!--上下选择器-->
      <div class="flex-grow-0">
        hihiih
      </div>
      <!--时间线-->
      <div class="flex-grow-1" style="overflow: scroll">
        <v-timeline>
          <v-timeline-item
              v-for="n in 4"
              :key="n"
              large
              right
          >
            <template v-slot:icon>
              <v-avatar>
                <img src="http://i.pravatar.cc/64">
              </v-avatar>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">Lorem ipsum</v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-container>
  </v-card>
</template>