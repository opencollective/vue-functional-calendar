export const propsAndData = {
    props: {
        configs: {
            type: Object,
            default: () => {
            }
        },
        sundayStart: {
            type: Boolean,
            default: () => undefined
        },
        placeholder: {
            type: [String, Boolean],
            default: () => undefined
        },
        dateFormat: {
            type: String
        },
        isMultiple: {
            type: Boolean,
            default: () => undefined
        },
        isSeparately: {
            type: Boolean,
            default: () => undefined
        },
        isDatePicker: {
            type: Boolean,
            default: () => undefined
        },
        isMultipleDatePicker: {
            type: Boolean,
            default: () => undefined
        },
        isDateRange: {
            type: Boolean,
            default: () => undefined
        },
        withTimePicker: {
            type: Boolean,
            default: () => undefined
        },
        calendarsCount: {
            type: Number
        },
        isModal: {
            type: Boolean,
            default: () => undefined
        },
        isTypeable: {
            type: Boolean,
            default: () => undefined
        },
        changeMonthFunction: {
            type: Boolean,
            default: () => undefined
        },
        changeYearFunction: {
            type: Boolean,
            default: () => undefined
        },
        changeYearStep: {
            type: Number,
            default: () => 12
        },
        applyStylesheet: {
            type: Boolean,
            default: () => undefined
        },
        newCurrentDate: {
            type: Date
        },
        markedDates: {
            type: Array,
            default: () => []
        },
        markedDateRange: {
            type: Object
        },
        disabledDayNames: {
            type: Array
        },
        disabledDates: {
            type: Array
        },
        limits: {
            type: [Object, Boolean],
            default: () => undefined
        },
        minSelDays: {
            type: [Number, Boolean],
            default: () => undefined
        },
        maxSelDays: {
            type: [Number, Boolean],
            default: () => undefined
        },
        dayNames: {
            type: Array,
        },
        monthNames: {
            type: Array
        },
        shortMonthNames: {
            type: Array
        },
        showWeekNumbers: {
            type: Boolean,
            default: () => undefined
        },
        value: {
            type: Object
        },
        transition: {
            type: Boolean,
            default: () => undefined
        },
        hiddenElements: {
            type: Array
        },
        isAutoCloseable: {
            type: Boolean,
            default: undefined,
        },
        isDark: {
            type: Boolean,