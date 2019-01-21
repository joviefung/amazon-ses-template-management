<template>
  <div class="template-details-root">
    <md-card class="template-details-card">
      <md-card-header>
        <md-card-header-text>
          <md-field>
            <label>Template Name</label>
            <md-input v-model="updatedTemplate.name"></md-input>
          </md-field>
        </md-card-header-text>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label>Mail Subject</label>
          <md-input v-model="updatedTemplate.mailSubject"></md-input>
        </md-field>
        <div class="mail-html-input">
          <label>Mail HTML</label>
          <html-editor 
            ref="htmlEditor"
            class="html-editor"
            :initial-content="updatedTemplate.mailHtml"
            @change="content => { updatedTemplate.mailHtml = content }"
          />
          <div v-html="updatedTemplate.mailHtml" />
        </div>
        <md-field>
          <label>Mail Text</label>
          <md-textarea v-model="updatedTemplate.mailText"></md-textarea>
        </md-field>
      </md-card-content>

      <md-card-actions>
        <md-button @click="$emit('cancel')">Cancel</md-button>
        <md-button @click="save">Save</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script src="./model.js">
</script>
<style lang="scss" src="./style.scss" scoped>
</style>
