<template>
  <div class="page md-layout">
    <login-dialog
      v-model="showLoginDialog"
    />
    <TemplateList
      v-if="!showLoginDialog"
      ref="templateList"
      class="md-layout-item template-list md-size-30"
      :loading="loadingTemplates"
      :templates="templates"
      @selectTemplate="templateName => { selectedTemplateName = templateName; showEditTemplate = false; }"
      @createTemplate="showEditTemplate = true; editingTemplate = null;"
      @showMessage="e => { message = e; }"
    />
    <TemplateDetails
      v-if="!showLoginDialog"
      v-show="!showEditTemplate"
      ref="templateDetails"
      :loading="loadingTemplateDetails"
      :template="selectedTemplate"
      class="md-layout-item md-size-70" 
      @edit="editingTemplate = selectedTemplate; showEditTemplate = true;"
      @delete="deleteTemplate"
      @showMessage="e => { message = e; }"
    />
    <EditTemplateDetails
      v-if="!showLoginDialog"
      v-show="showEditTemplate"
      :is-visible="showEditTemplate"
      :template="editingTemplate"
      class="md-layout-item md-size-70" 
      @cancel="showEditTemplate = false;"
      @add="addTemplate"
      @edit="refreshTemplateDetails"
      @showMessage="e => { message = e; }"
    />

    <md-snackbar 
      :md-active.sync="showSnackbar" 
      md-position="left"
    >
      <span>{{ message }}</span>
      <md-button class="md-primary" @click="showSnackbar = false">Close</md-button>
    </md-snackbar>
  </div>
</template>

<script src="./model.js">
</script>
<style lang="scss" src="./style.scss" scoped>
</style>
