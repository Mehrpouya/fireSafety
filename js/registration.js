$(function(){
  $("#addChildrenBtn").bind("click",function(){
    $("#children").html("");
    var child = "<div class='form-group row'> \
      <button data-toggle='collapse' data-target='#child$'>Collapsible</button> \
      <div id='child$' class='collapse'>\
        <div class='form-group row'>\
          <label class='col-md-4 control-label' for='age$'>Age of child</label>\
          <div class='col-md-4'>\
            <div class='input-group'>\
              <input id='age$' name='age$' class='form-control' placeholder='Age' type='text'>\
              <div class='input-group-btn'>\
                <button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'>\
                  Gender\
                  <span class='caret'></span>\
                </button>\
                <ul class='dropdown-menu pull-right' id='gender$'>\
                  <li><a >Male</a></li>\
                  <li><a >Female</a></li>\
                </ul>\
              </div>\
            </div>\
          </div>\
        </div>\
        <div class='form-group row'>\
          <label class='col-md-4 control-label' for='berdoom$'>Does this child sleep in their own room?</label>\
          <div class='col-md-4'>\
            <div class='input-group'>\
              <input id='buttondropdown' name='berdoom$' class='form-control' placeholder='Comments' required='' type='text'>\
              <div class='input-group-btn'>\
                <button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'>\
                  Answer\
                  <span class='caret'></span>\
                </button>\
                <ul id='berdoomAnswer$' class='dropdown-menu pull-right'>\
                  <li><a href='#'>Yes</a></li>\
                  <li><a href='#'>No</a></li>\
                </ul>\
              </div>\
            </div>\
          </div>\
        </div>\
        <div class='form-group row '>\
          <label class='col-md-4 control-label' for='hand'>Are they lefthanded or right handed?</label>\
          <div class='col-md-4'>\
            <label class='radio-inline' for='hand-0'>\
              <input name='hand' id='hand-0' value='left' checked='checked' type='radio'>\
              Left handed\
            </label>\
            <label class='radio-inline' for='hand-1'>\
              <input name='hand' id='hand-1' value='right' type='radio'>\
              Right handed\
            </label>\
          </div>\
        </div>\
        <div class='form-group row '>\
          <label class='col-md-4 control-label' for='buttondropdown'>Does this child have difficulties getting to sleep or remaining aspleep during the night?</label>\
          <div class='col-md-4'>\
            <div class='input-group'>\
              <input id='buttondropdown' name='buttondropdown' class='form-control' placeholder='if so, please expand a little...' required='' type='text'>\
              <div class='input-group-btn'>\
                <button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'>\
                  Answer\
                  <span class='caret'></span>\
                </button>\
                <ul class='dropdown-menu pull-right'>\
                  <li><a href='#'>Yes</a></li>\
                  <li><a href='#'>No</a></li>\
                </ul>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>\
    </div>";
    var chNum = $("#numChildren").val();
    for(var i = 0 ; i<chNum ; i++){
       var newChild = child.replaceAll("$", i);
       console.log(newChild);
      $("#children").append(newChild);
    }
  })
})
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
