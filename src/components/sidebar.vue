<script setup>

</script>

<template>
  <div class="screen">
    <!-- Hamburger icon to toggle the side navigation -->
    <div class="hamburger" @click="toggleNav">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <!-- Side navigation bar -->
    <div class="sidenav" :class="{ 'sidenav-open': isOpen }">
      <!-- Logo Image at the top of the sidebar -->
      <img src="/public/images/logo.png" alt="Logo" class="logo">

      <!-- Close button with cross icon -->
      <button class="close-btn" @click="toggleNav">
        <svg class="cross-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M18.364 5.636a.5.5 0 0 0-.707 0L12 10.293 7.343 5.636a.5.5 0 1 0-.707.707L11.293 12l-4.646 4.657a.5.5 0 1 0 .707.707L12 13.707l4.657 4.646a.5.5 0 0 0 .707-.707L12.707 12l4.657-4.657a.5.5 0 0 0 0-.707z"/>
        </svg>
      </button>



      <ul>
        <!-- Dropdown 1 -->
        <li class="dropdown" @click="toggleDropdown('dropdown1')">
          <b-button squared variant="light" class="dropbtn navbtns" :to="`/`" >Current Newsletter</b-button>
          <div class="dropdown-content" v-show="dropdownOpen === 'dropdown1'">
            <b-button class="subnavbtns" squared :to = "`/poetry`">Poetry</b-button>
            <b-button class="subnavbtns" squared :to = "`/essays`">Essays</b-button>
            <b-button class="subnavbtns" squared :to="`/journals`">Journals</b-button>
            <b-button class="subnavbtns" squared :to = "`/artworks`">Art</b-button>
            <b-button class="subnavbtns" squared :to = "`/education`">Education</b-button>
          </div>
        </li>



        <!-- Dropdown 2 -->
        <li class="dropdown" @click="toggleDropdown('dropdown2')">
          <b-button squared variant="light" class="dropbtn navbtns" :to="`/archives`">Archives</b-button>
          <div class="dropdown-content" v-show="dropdownOpen === 'dropdown2'">
            <b-button class="subnavbtns" squared :to="`/archives/programs`">Education Programs</b-button>
            <b-button squared class="dropbtn subnavbtns" :to="`/archives/newsletter`">Newsletters</b-button>
            <!-- <div squared class="dropdown-content scrollable-dropdown">
                <b-button class="subnavbtns" squared>2023</b-button>
                <b-button class="subnavbtns" squared>2022</b-button>
                <b-button class="subnavbtns" squared>2021</b-button>
                <b-button class="subnavbtns" squared>2020</b-button>
                <b-button class="subnavbtns" squared>2019</b-button>
                <b-button class="subnavbtns" squared>2018</b-button>
                <b-button class="subnavbtns" squared>2017</b-button>
                <b-button class="subnavbtns" squared>2016</b-button>
                <b-button class="subnavbtns" squared>2015</b-button>
            </div> -->
          </div>
            </li>



        <!-- Dropdown 3 -->
        <li class="dropdown" @click="toggleDropdown('dropdown3')">
          <b-button squared variant="light" class="dropbtn navbtns" :to="`/resources`">Resources</b-button>
          <div class="dropdown-content" v-show="dropdownOpen === 'dropdown3'">
            <b-button class="subnavbtns" squared :href="`${baseDir}resources/#what-is-prisoner-express`">What is Prisoner Express?</b-button>
            <b-button class="subnavbtns" squared :href="`${baseDir}resources/#mission-goals`">Missions & Goals</b-button>
            <b-button class="subnavbtns" squared :href="`${baseDir}resources/#how-to-sign-up-to-programs`">Program Sign Up instructions</b-button>
            <b-button class="subnavbtns" squared :href="`${baseDir}resources/#submission-guidelines`">Submission Guidelines</b-button>
            <b-button class="subnavbtns" squared :href="`${baseDir}resources/#censorship-content-policies`">Censorship Content Policies</b-button>
            <b-button class="subnavbtns" squared :href="`${baseDir}resources/#frequently-asked-questions`">FAQs</b-button>
            <b-button class="subnavbtns" squared :href="`${baseDir}resources/#contact-us`">Have Questions?</b-button>
          </div>
        </li>
      </ul>




    </div>

    <!-- Main content -->
    <div class="main-content" :class="{ 'content-open': isOpen }">
      <RouterView />
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false, // Initial state of the side navigation
      dropdownOpen: null // Track which dropdown menu is open
    };
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen; // Toggle the state of the side navigation
    },
    toggleDropdown(dropdown) {
      this.dropdownOpen = this.dropdownOpen === dropdown ? null : dropdown; // Toggle the clicked dropdown menu
    }
  }
};
</script>

<style scoped>
/* Hamburger icon styles */
.hamburger {
  display: block;
  cursor: pointer;
  margin:0px;
  padding:20px;
  /* background-color: #b7aa96; */
  /* background-color: #2A3D45; */
  background-color: #368564;
}

.line {
  width: 25px;
  height: 3px;
  /* background-color: #333; */
  background-color: white;
  margin: 5px 0;
}

/* Side navigation styles */
.sidenav {
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: -200px; /* Initially hidden */
  /* background-color: #b7aa96; */
  background-color: #368564;
  transition: left 0.3s ease;
  z-index: 999; /* Higher z-index to ensure it's above main content */
}

.sidenav-open {
  left: 0; /* Move the side navigation in */
}

/* Close button styles */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-weight: bold;
}

/* Cross icon styles */
.cross-icon {
  width: 20px;
  height: 20px;
  fill: #333;
}

/* Dropdown styles */
.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown-content {
  display: flex;
  flex-direction: column;
  background-color: #ffefd6;
  min-width: 160px;
  z-index: 1;
  top: 100%; /* Align the dropdown content below the dropdown link */
  left: 0; /* Align the dropdown content with the dropdown link */
}

/* Main content styles */
.main-content {
  margin-left: 0; /* Ensure main content is not shifted initially */
  transition: margin-left 0.3s ease;
  background-color: #ffefd6 !important;
}

.content-open {
  margin-left: 150px; /* Move the main content aside when sidebar is open */
  width:100%;
}

/* Scrollable dropdown styles */
.scrollable-dropdown {
  max-height: 200px; /* Set max height for scrollable area */
  overflow-y: auto; /* Enable vertical scrolling if needed */
}

/* Logo styles */
.logo {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 30px;
}

.screen{
  display: flex;
  align-content: flex-start;
  margin:0;
}

ul {
  list-style-type: none;
  padding:0;
}

.scrollable-dropdown{
  padding-left:10px;
  padding-right:10px;
}
</style>

<style>
.navbtns{
  width: 100% !important;
  padding:10px !important;
  color:#fff !important;
  background-color: #368564 !important;
  /* background-color: #b7aa96 !important; */
  border-width: 0 !important;
}

.subnavbtns{
  width: 100% !important;
  padding:10px !important;
  color:#fff !important;
  background-color: #2A3D45 !important;
  /* background-color: #368564 !important; */
  border-width: 0 !important;
}

.main-content {
  background-color: #ffefd6 !important;
  margin-bottom: 40px;
}
</style>
