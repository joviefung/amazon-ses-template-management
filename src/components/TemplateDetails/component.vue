<template>
  <div class="template-details-root md-layout md-alignment-center-center">
    <md-card class="template-details-card md-layout-item">
      <template v-if="loading">
        <div class="md-layout md-alignment-center-center">
          <md-progress-spinner 
            :md-stroke="3"
            class="progress-spinner"
            md-mode="indeterminate"
          />
        </div>
      </template>

      <template v-else>
        <md-card-header>
          <md-card-header-text>
            <div class="md-layout md-alignment-center-space-between">
              <div>
                <div class="md-subhead">Template Name</div>
                <div class="md-title">{{ template.name }}</div>
              </div>
              <md-button @click="showTemplateData = true">Template Data</md-button>
            </div>
          </md-card-header-text>
        </md-card-header>
        <md-card-content>
          <div class="template-info">
            <div class="md-subhead">Mail</div>
            <div class="md-subheading">{{ template.mailSubject }}</div>
          </div>
          <div class="template-info">
            <div v-html="template.mailHtml" />
          </div>
          <div class="template-info">
            <div class="md-body-1">{{ template.mailText }}</div>
          </div>
        </md-card-content>
        <md-card-actions>
          <md-button class="md-accent" @click="confirmDelete = true">Delete</md-button>
          <md-button @click="$emit('edit', template)">Edit</md-button>
        </md-card-actions>
      </template>
    </md-card>

    <md-dialog :md-active.sync="confirmDelete">
      <md-dialog-title>Are you sure you want to delete this template?</md-dialog-title>
      <md-dialog-content>You cannot undo this action. All template content will be lost.</md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-accent" @click="remove">Delete</md-button>
      </md-dialog-actions>
    </md-dialog>

     <md-dialog :md-active.sync="showTemplateData">
      <md-dialog-title>Template Data</md-dialog-title>
      <md-dialog-content>
        <div 
          class="md-body-1 template-data"
          v-html="JSON.stringify(templateData, null, 4)"
        />
      </md-dialog-content>
      <md-dialog-actions>
        <md-button @click="copyTemplateData">Copy</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script src="./model.js">
</script>
<style lang="scss" src="./style.scss" scoped>
</style>
