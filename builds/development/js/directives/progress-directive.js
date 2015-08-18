angular
.module('myApp')
.directive('blueProgressDirective',blueProgressDirective)
.directive('greenProgressDirective',greenProgressDirective)
.directive('lightblueProgressDirective',lightblueProgressDirective)
.directive('orangeProgressDirective',orangeProgressDirective)
.directive('redProgressDirective',redProgressDirective)
;

function blueProgressDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      blueparentClass:'@',
      blueprogressClass:'@',
      blueroleValue:'@',
      bluecurrentValue:'@',
      blueminValue:'@',
      bluemaxValue:'@',
      bluestyleValue:'@'
    },
    template:'<div class="{{blueparentClass}}">\
<div class="{{blueprogressClass}}"\
role="{{blueroleValue}}" aria-valuenow="{{bluecurrentValue}}" aria-valuemin="{{blueminValue}}"\
aria-valuemax="{{bluemaxValue}}" style="{{bluestyleValue}}">\
    </div>\
    </div>'
  }
}

function greenProgressDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      greenparentClass:'@',
      greenprogressClass:'@',
      greenroleValue:'@',
      greencurrentValue:'@',
      greenminValue:'@',
      greenmaxValue:'@',
      greenstyleValue:'@'
    },
    template:'<div class="{{greenparentClass}}">\
<div class="{{greenprogressClass}}"\
role="{{greenroleValue}}" aria-valuenow="{{greencurrentValue}}" aria-valuemin="{{greenminValue}}"\
aria-valuemax="{{greenmaxValue}}" style="{{greenstyleValue}}">\
</div>\
</div>'
  }
}
function lightblueProgressDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      lightblueparentClass:'@',
      lightblueprogressClass:'@',
      lightblueroleValue:'@',
      lightbluecurrentValue:'@',
      lightblueminValue:'@',
      lightbluemaxValue:'@',
      lightbluestyleValue:'@'
    },
    template:'<div class="{{lightblueparentClass}}">\
<div class="{{lightblueprogressClass}}"\
role="{{lightblueroleValue}}" aria-valuenow="{{lightbluecurrentValue}}" aria-valuemin="{{lightblueminValue}}"\
aria-valuemax="{{lightbluemaxValue}}" style="{{lightbluestyleValue}}">\
</div>\
</div>'
  }
}
function orangeProgressDirective(){
  return{
    restrict:'A',
    replace:true,
    scope:{
      orangeparentClass:'@',
      orangeprogressClass:'@',
      orangeroleValue:'@',
      orangecurrentValue:'@',
      orangeminValue:'@',
      orangemaxValue:'@',
      orangestyleValue:'@'
    },
    template:'<div class="{{orangeparentClass}}">\
<div class="{{orangeprogressClass}}"\
role="{{orangeroleValue}}" aria-valuenow="{{orangecurrentValue}}" aria-valuemin="{{orangeminValue}}"\
aria-valuemax="{{orangemaxValue}}" style="{{orangestyleValue}}">\
</div>\
</div>'
  }
}
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

