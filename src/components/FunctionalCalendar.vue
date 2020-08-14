<template>
    <div :class="{'vfc-styles-conditional-class': fConfigs.applyStylesheet}">
        <div class="vfc-multiple-input" :class="{'vfc-dark': fConfigs.isDark}"
             v-if="fConfigs.isModal && fConfigs.isDateRange">
            <input type="text" title="Start Date"
                   v-model="input.dateRange.start.date"
                   :placeholder="fConfigs.placeholder"
                   :readonly="!fConfigs.isTypeable"
                   :maxlength="fConfigs.dateFormat.length"
                   @click="showCalendar = !showCalendar">
            <input type="text" title="End Date"
                   v-model="input.dateRange.end.date"
                   :placeholder="fConfigs.placeholder"
                   :readonly="!fConfigs.isTypeable"
                   :maxlength="fConfigs.dateFormat.length"
                   @click="showCalendar = !showCalendar">
        </div>
        <div :class="{'vfc-dark': fConfigs.isDark}" v-else-if="fConfigs.isModal && fConfigs.isDatePicker">
            <input class="vfc-single-input" type="text" title="Date"
                   v-model="input.selectedDate"
                   :placeholder="fConfigs.placeholder"
                   :readonly="!fConfigs.isTypeable"
                   :maxlength="fConfigs.dateFormat.length"
                   @click="showCalendar = !showCalendar">
        </div>
        <div class="vfc-main-container" v-show="showCalendar"
             ref="mainContainer"
             :class="{'vfc-modal': fConfigs.isModal && (fConfigs.isDatePicker || fConfigs.isDateRange), 'vfc-dark': fConfigs.isDark}">
