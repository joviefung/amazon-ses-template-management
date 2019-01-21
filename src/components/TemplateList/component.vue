<template>
  <md-list class="md-double-line">
    <md-list-item 
      class="add-button"
      @click="$emit('createTemplate')"
    >
      <md-icon>add</md-icon>
      <span class="md-list-item-text">Add Template</span>
    </md-list-item>
    <md-list-item v-if="loading">
      <div class="md-layout md-alignment-center-center">
        <md-progress-spinner 
          :md-stroke="3"
          :md-diameter="40"
          class="progress-spinner"
          md-mode="indeterminate"
        />
      </div>
    </md-list-item>
    <md-list-item
      v-else
      v-for="template in templates" 
      :key="template.Name"
      @click="$emit('selectTemplate', template.name)"
    >
      <div class="md-list-item-text">
        <span>{{ template.name }}</span>
        <span class="created-datetime-text">
          <md-icon class="icon">access_time</md-icon>
          <span>{{ template.createdDatetimeString }}</span>
        </span>
      </div>
    </md-list-item>
  </md-list>
</template>

<script src="./model.js">
</script>
<style lang="scss" src="./style.scss" scoped>
</style>
