<template>
    <div>
        <Navbar/>
    <div class="container-fluid">
      <div class="row">
        <sidebar></sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <router-view></router-view>
        </main>
      </div>
    </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar';

export default {
    components:{
        Sidebar,
        Navbar,
        
    }
}
</script>