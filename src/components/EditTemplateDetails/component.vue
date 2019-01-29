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
        <md-button 
          :disabled="loading"
          @click="$emit('cancel')"
        >Cancel</md-button>
        <md-button 
          :disabled="loading"
          @click="save"
        >
          <md-progress-spinner
            v-if="loading"
            :md-diameter="20" 
            :md-stroke="2" 
            md-mode="indeterminate" 
          />
          <span v-else>Save</span>
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script src="./model.js">
</script>
<style lang="scss" src="./style.scss" scoped>
</style>
