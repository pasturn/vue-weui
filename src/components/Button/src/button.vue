<template>
    <a 
      href="javascript:;"
      class="weui-btn"
      :class="['weui-btn_' + (mini ? 'mini' : ''),
        'weui-btn_' + (plain ? 'plain-' : '')+ type, 
       disabled ? 'weui-btn_'+ (plain ? 'plain-' : '') + 'disabled' : null]"
      :disabled="disabled"
      :plain="plain"
      :mini="mini"
      @click="handleClick">
        <slot></slot>
    </a>
</template>
<script>
export default {
  name: 'weui-button',
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  },

  props: {
    disabled: Boolean,
    plain: Boolean,
    mini: Boolean,
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'default',
          'warn',
          'primary'
        ].indexOf(value) > -1
      }
    }
  }
}
</script>
<style lang="less">
@import "weui-btn_global";
@import "weui-btn_default";
@import "weui-btn_primary";
@import "weui-btn_warn";
@import "weui-btn_disabled";
@import "weui-btn_plain";

button, input {
    &.weui-btn {
        width: 100%;
        border-width: 0;
        outline: 0;
        -webkit-appearance: none;
        &:focus {
            outline: 0;
        }
    }
    &.weui-btn_inline,&.weui-btn_mini {
        width: auto;
    }
    &.weui-btn_plain-primary,&.weui-btn_plain-default{
        border-width: 1px;
        background-color: transparent;
    }
}

.weui-btn_mini {
    display: inline-block;
    padding: 0 1.32em;
    line-height: @weuiBtnMiniHeight;
    font-size: @weuiBtnMiniFontSize;
}


/*gap between btn*/
.weui-btn + .weui-btn {
    margin-top: @weuiBtnDefaultGap;
}

.weui-btn.weui-btn_inline + .weui-btn.weui-btn_inline {
    margin-top: auto;
    margin-left: @weuiBtnDefaultGap;
}

.weui-btn-area {
    margin: @weuiCellsMarginTop @weuiBtnDefaultGap .3em; 
}
.weui-btn-area_inline {
    display: flex;
    .weui-btn {
        margin-top: auto;
        margin-right: @weuiBtnDefaultGap;
        width: 100%;
        flex: 1;
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>
