<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';

export default {
  name: "App",
  setup() {
      onMounted(() => {
          console.log("mounted")
          // minimize mobile menu button
        $(document).on('click', '#toggle_btn', function() {
            if($('body').hasClass('mini-sidebar')) {
                $('body').removeClass('mini-sidebar');
                $('.subdrop + ul').slideDown();
            } else {
                $('body').addClass('mini-sidebar');
                $('.subdrop + ul').slideUp();
            }
            return false;
        });

      })
  }
};
</script>
