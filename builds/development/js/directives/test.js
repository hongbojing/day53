function redProgressDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      redparentClass:'@',
      redprogressClass:'@',
      redroleValue:'@',
      redcurrentValue:'@',
      redminValue:'@',
      redmaxValue:'@',
      redstyleValue:'@'
    },
    template:'<div class="{{redparentClass}}">\
<div class="{{redprogressClass}}"\
role="{{redroleValue}}" aria-valuenow="{{redcurrentValue}}" aria-valuemin="{{redminValue}}"\
aria-valuemax="{{redmaxValue}}" style="{{redstyleValue}}">\
</div>\
</div>'
  }
}
