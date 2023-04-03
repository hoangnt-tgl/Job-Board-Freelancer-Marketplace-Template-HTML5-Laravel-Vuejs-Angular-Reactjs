<template>
<div>
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
            <layout-accountheader></layout-accountheader>
			<!-- /Header -->

            <!-- Breadcrumb -->
			<div class="breadcrumb-bar">
				<div class="container">
					<div class="row align-items-center inner-banner">
						<div class="col-md-12 col-12 text-center">
							<h2 class="breadcrumb-title">Edit Projects</h2>
							<nav aria-label="breadcrumb" class="page-breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/index">Home</router-link></li>
									<li class="breadcrumb-item active" aria-current="page"> Edit Projects</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<!-- /Breadcrumb -->
						
			<!-- Page Content -->
			<editprojectcontent></editprojectcontent>					
			<!-- /Page Content -->
           
            <!-- Footer -->
                <layout-footer />
            <!-- /Footer -->
        </div>
        <!-- /Main Wrapper -->

        </div>
</template>
<script>
    export default {
         mounted() {
    
    
    $(document).on('click', '.searchbar .fa-search', function() {
            $(".togglesearch").toggle();
            $(".top-search").focus();
        });
    var maxLength = 100;
        $('#review_desc').on('keyup change', function () {
            var length = $(this).val().length;
             length = maxLength-length;
            $('#chars').text(length);
        });
    if($('.floating').length > 0 ){
            $('.floating').on('focus blur', function (e) {
            $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
            }).trigger('blur');
        }
    // Add More Hours
        
        $(".hours-info").on('click','.trash', function () {
            $(this).closest('.hours-cont').remove();
            return false;
        });
    
        $(".add-hours").on('click', function () {
            
            var hourscontent = '<div class="row form-row hours-cont">' +
                '<div class="col-12 col-md-10">' +
                    '<div class="row form-row">' +
                        '<div class="col-12 col-md-6">' +
                            '<div class="form-group">' +
                                '<label>Start Time</label>' +
                                '<select class="form-control">' +
                                    '<option>-</option>' +
                                    '<option>12.00 am</option>' +
                                    '<option>12.30 am</option>' + 
                                    '<option>1.00 am</option>' +
                                    '<option>1.30 am</option>' +
                                '</select>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-12 col-md-6">' +
                            '<div class="form-group">' +
                                '<label>End Time</label>' +
                                '<select class="form-control">' +
                                    '<option>-</option>' +
                                    '<option>12.00 am</option>' +
                                    '<option>12.30 am</option>' +
                                    '<option>1.00 am</option>' +
                                    '<option>1.30 am</option>' +
                                '</select>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-md-2"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
            '</div>';
            
            $(".hours-info").append(hourscontent);
            return false;
        });
    function resizeInnerDiv() {
            var height = $(window).height();    
            var header_height = $(".header").height();
            var footer_height = $(".footer").height();
            var setheight = height - header_height;
            var trueheight = setheight - footer_height;
            $(".content").css("min-height", trueheight);
        }
        
        if($('.content').length > 0 ){
            resizeInnerDiv();
        }
    
        $(window).on('resize', function(){
            if($('.content').length > 0 ){
                resizeInnerDiv();
            }
        });
    var chatAppTarget = $('.chat-window');
        (function() {
            if ($(window).width() > 991)
                chatAppTarget.removeClass('chat-slide');
            
            $(document).on("click",".chat-window .chat-users-list a.media",function () {
                if ($(window).width() <= 991) {
                    chatAppTarget.addClass('chat-slide');
                }
                return false;
            });
            $(document).on("click","#back_user_list",function () {
                if ($(window).width() <= 991) {
                    chatAppTarget.removeClass('chat-slide');
                }   
                return false;
            });
        })();
    $(document).on('click', '.select-group .select-item .service-item', function() {
            $('.selected .service-item .fa').removeClass('fa-check');
            $('.select-item .service-item').removeClass('selected');
            $(this).addClass('selected');
        });
    $(document).on('click', '.readmore', function() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("myBtn");
    
            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        });
    if($('#store').length > 0) {
            document.getElementById('store').storeID.onchange = function() {
                var newaction = this.value;
                document.getElementById('store').action = newaction;
            }
        };
    // Edit Experiance
    
        $('#edit_experiance').on('click',function(){
            $('.pro-new').css('display','block');
            $('.pro-text').css('display','none');
        });
    
        $('.profile-cancel-btn').on('click',function(){
           $('.pro-new').css('display','none');
           $('.pro-text').css('display','block');
        });
       
        // Overview
        $('#edit_overview').on('click',function(){
           $('.pro-new1').css('display','block');
           $('.pro-text1').css('display','none');
        });
    
        $('.profile-cancel-btn').on('click',function(){
           $('.pro-new1').css('display','none');
           $('.pro-text1').css('display','block');
        });
       
        // Overview
    
        $('#edit_education').on('click',function(){
           $('.pro-new2').css('display','block');
           $('.pro-text2').css('display','none');
        });
    
        $('.profile-cancel-btn').on('click',function(){
           $('.pro-new2').css('display','none');
           $('.pro-text2').css('display','block');
        });
    
        $('#edit_name').on('click',function(){
            $('.pro-new3').css('display','block');
            $('.pro-text3').css('display','none');
        });
    
        $('.profile-cancel-btn').on('click',function(){
            $('.pro-new3').css('display','none');
            $('.pro-text3').css('display','block');
        });
    
     var defaultOptions = {
        tagClass: function(item) {
          return 'badge badge-info';
        },
        focusClass: 'focus',
        itemValue: function(item) {
          return item ? item.toString() : item;
        },
        itemText: function(item) {
          return this.itemValue(item);
        },
        itemTitle: function(item) {
          return null;
        },
        freeInput: true,
        addOnBlur: true,
        maxTags: undefined,
        maxChars: undefined,
        confirmKeys: [13, 44],
        delimiter: ',',
        delimiterRegex: null,
        cancelConfirmKeysOnEmpty: false,
        onTagExists: function(item, $tag) {
          $tag.hide().fadeIn();
        },
        trimValue: false,
        allowDuplicates: false,
        triggerChange: true
      };
    
      /**
       * Constructor function
       */
      function TagsInput(element, options) {
        this.isInit = true;
        this.itemsArray = [];
    
        this.$element = $(element);
        this.$element.hide();
    
        this.isSelect = (element.tagName === 'SELECT');
        this.multiple = (this.isSelect && element.hasAttribute('multiple'));
        this.objectItems = options && options.itemValue;
        this.placeholderText = element.hasAttribute('placeholder') ? this.$element.attr('placeholder') : '';
        this.inputSize = Math.max(1, this.placeholderText.length);
    
        this.$container = $('<div class="bootstrap-tagsinput"></div>');
        this.$input = $('<input type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container);
    
        this.$element.before(this.$container);
    
        this.build(options);
        this.isInit = false;
      }
    
      TagsInput.prototype = {
        constructor: TagsInput,
    
        /**
         * Adds the given item as a new tag. Pass true to dontPushVal to prevent
         * updating the elements val()
         */
        add: function(item, dontPushVal, options) {
          var self = this;
    
          if (self.options.maxTags && self.itemsArray.length >= self.options.maxTags)
            return;
    
          // Ignore falsey values, except false
          if (item !== false && !item)
            return;
    
          // Trim value
          if (typeof item === "string" && self.options.trimValue) {
            item = $.trim(item);
          }
    
          // Throw an error when trying to add an object while the itemValue option was not set
          if (typeof item === "object" && !self.objectItems)
            throw("Can't add objects when itemValue option is not set");
    
          // Ignore strings only containg whitespace
          if (item.toString().match(/^\s*$/))
            return;
    
          // If SELECT but not multiple, remove current tag
          if (self.isSelect && !self.multiple && self.itemsArray.length > 0)
            self.remove(self.itemsArray[0]);
    
          if (typeof item === "string" && this.$element[0].tagName === 'INPUT') {
            var delimiter = (self.options.delimiterRegex) ? self.options.delimiterRegex : self.options.delimiter;
            var items = item.split(delimiter);
            if (items.length > 1) {
              for (var i = 0; i < items.length; i++) {
                this.add(items[i], true);
              }
    
              if (!dontPushVal)
                self.pushVal(self.options.triggerChange);
              return;
            }
          }
    
          var itemValue = self.options.itemValue(item),
              itemText = self.options.itemText(item),
              tagClass = self.options.tagClass(item),
              itemTitle = self.options.itemTitle(item);
    
          // Ignore items allready added
          var existing = $.grep(self.itemsArray, function(item) { return self.options.itemValue(item) === itemValue; } )[0];
          if (existing && !self.options.allowDuplicates) {
            // Invoke onTagExists
            if (self.options.onTagExists) {
              var $existingTag = $(".tag", self.$container).filter(function() { return $(this).data("item") === existing; });
              self.options.onTagExists(item, $existingTag);
            }
            return;
          }
    
          // if length greater than limit
          if (self.items().toString().length + item.length + 1 > self.options.maxInputLength)
            return;
    
          // raise beforeItemAdd arg
          var beforeItemAddEvent = $.Event('beforeItemAdd', { item: item, cancel: false, options: options});
          self.$element.trigger(beforeItemAddEvent);
          if (beforeItemAddEvent.cancel)
            return;
    
          // register item in internal array and map
          self.itemsArray.push(item);
    
          // add a tag element
    
          var $tag = $('<span class="tag ' + htmlEncode(tagClass) + (itemTitle !== null ? ('" title="' + itemTitle) : '') + '">' + htmlEncode(itemText) + '<span data-role="remove"></span></span>');
          $tag.data('item', item);
          self.findInputWrapper().before($tag);
          $tag.after(' ');
    
          // Check to see if the tag exists in its raw or uri-encoded form
          var optionExists = (
            $('option[value="' + encodeURIComponent(itemValue) + '"]', self.$element).length ||
            $('option[value="' + htmlEncode(itemValue) + '"]', self.$element).length
          );
    
          // add <option /> if item represents a value not present in one of the <select />'s options
          if (self.isSelect && !optionExists) {
            var $option = $('<option selected>' + htmlEncode(itemText) + '</option>');
            $option.data('item', item);
            $option.attr('value', itemValue);
            self.$element.append($option);
          }
    
          if (!dontPushVal)
            self.pushVal(self.options.triggerChange);
    
          // Add class when reached maxTags
          if (self.options.maxTags === self.itemsArray.length || self.items().toString().length === self.options.maxInputLength)
            self.$container.addClass('bootstrap-tagsinput-max');
    
          // If using typeahead, once the tag has been added, clear the typeahead value so it does not stick around in the input.
          if ($('.typeahead, .twitter-typeahead', self.$container).length) {
            self.$input.typeahead('val', '');
          }
    
          if (this.isInit) {
            self.$element.trigger($.Event('itemAddedOnInit', { item: item, options: options }));
          } else {
            self.$element.trigger($.Event('itemAdded', { item: item, options: options }));
          }
        },
    
        /**
         * Removes the given item. Pass true to dontPushVal to prevent updating the
         * elements val()
         */
        remove: function(item, dontPushVal, options) {
          var self = this;
    
          if (self.objectItems) {
            if (typeof item === "object")
              item = $.grep(self.itemsArray, function(other) { return self.options.itemValue(other) ==  self.options.itemValue(item); } );
            else
              item = $.grep(self.itemsArray, function(other) { return self.options.itemValue(other) ==  item; } );
    
            item = item[item.length-1];
          }
    
          if (item) {
            var beforeItemRemoveEvent = $.Event('beforeItemRemove', { item: item, cancel: false, options: options });
            self.$element.trigger(beforeItemRemoveEvent);
            if (beforeItemRemoveEvent.cancel)
              return;
    
            $('.tag', self.$container).filter(function() { return $(this).data('item') === item; }).remove();
            $('option', self.$element).filter(function() { return $(this).data('item') === item; }).remove();
            if($.inArray(item, self.itemsArray) !== -1)
              self.itemsArray.splice($.inArray(item, self.itemsArray), 1);
          }
    
          if (!dontPushVal)
            self.pushVal(self.options.triggerChange);
    
          // Remove class when reached maxTags
          if (self.options.maxTags > self.itemsArray.length)
            self.$container.removeClass('bootstrap-tagsinput-max');
    
          self.$element.trigger($.Event('itemRemoved',  { item: item, options: options }));
        },
    
        /**
         * Removes all items
         */
        removeAll: function() {
          var self = this;
    
          $('.tag', self.$container).remove();
          $('option', self.$element).remove();
    
          while(self.itemsArray.length > 0)
            self.itemsArray.pop();
    
          self.pushVal(self.options.triggerChange);
        },
    
        /**
         * Refreshes the tags so they match the text/value of their corresponding
         * item.
         */
        refresh: function() {
          var self = this;
          $('.tag', self.$container).each(function() {
            var $tag = $(this),
                item = $tag.data('item'),
                itemValue = self.options.itemValue(item),
                itemText = self.options.itemText(item),
                tagClass = self.options.tagClass(item);
    
              // Update tag's class and inner text
              $tag.attr('class', null);
              $tag.addClass('tag ' + htmlEncode(tagClass));
              $tag.contents().filter(function() {
                return this.nodeType == 3;
              })[0].nodeValue = htmlEncode(itemText);
    
              if (self.isSelect) {
                var option = $('option', self.$element).filter(function() { return $(this).data('item') === item; });
                option.attr('value', itemValue);
              }
          });
        },
    
        /**
         * Returns the items added as tags
         */
        items: function() {
          return this.itemsArray;
        },
    
        /**
         * Assembly value by retrieving the value of each item, and set it on the
         * element.
         */
        pushVal: function() {
          var self = this,
              val = $.map(self.items(), function(item) {
                return self.options.itemValue(item).toString();
              });
    
          self.$element.val(val, true);
    
          if (self.options.triggerChange)
            self.$element.trigger('change');
        },
    
        /**
         * Initializes the tags input behaviour on the element
         */
        build: function(options) {
          var self = this;
    
          self.options = $.extend({}, defaultOptions, options);
          // When itemValue is set, freeInput should always be false
          if (self.objectItems)
            self.options.freeInput = false;
    
          makeOptionItemFunction(self.options, 'itemValue');
          makeOptionItemFunction(self.options, 'itemText');
          makeOptionFunction(self.options, 'tagClass');
    
          // Typeahead Bootstrap version 2.3.2
          if (self.options.typeahead) {
            var typeahead = self.options.typeahead || {};
    
            makeOptionFunction(typeahead, 'source');
    
            self.$input.typeahead($.extend({}, typeahead, {
              source: function (query, process) {
                function processItems(items) {
                  var texts = [];
    
                  for (var i = 0; i < items.length; i++) {
                    var text = self.options.itemText(items[i]);
                    map[text] = items[i];
                    texts.push(text);
                  }
                  process(texts);
                }
    
                this.map = {};
                var map = this.map,
                    data = typeahead.source(query);
    
                if ($.isFunction(data.success)) {
                  // support for Angular callbacks
                  data.success(processItems);
                } else if ($.isFunction(data.then)) {
                  // support for Angular promises
                  data.then(processItems);
                } else {
                  // support for functions and jquery promises
                  $.when(data)
                   .then(processItems);
                }
              },
              updater: function (text) {
                self.add(this.map[text]);
                return this.map[text];
              },
              matcher: function (text) {
                return (text.toLowerCase().indexOf(this.query.trim().toLowerCase()) !== -1);
              },
              sorter: function (texts) {
                return texts.sort();
              },
              highlighter: function (text) {
                var regex = new RegExp( '(' + this.query + ')', 'gi' );
                return text.replace( regex, "<strong>$1</strong>" );
              }
            }));
          }
    
          // typeahead.js
          if (self.options.typeaheadjs) {
              var typeaheadConfig = null;
              var typeaheadDatasets = {};
    
              // Determine if main configurations were passed or simply a dataset
              var typeaheadjs = self.options.typeaheadjs;
              if ($.isArray(typeaheadjs)) {
                typeaheadConfig = typeaheadjs[0];
                typeaheadDatasets = typeaheadjs[1];
              } else {
                typeaheadDatasets = typeaheadjs;
              }
    
              self.$input.typeahead(typeaheadConfig, typeaheadDatasets).on('typeahead:selected', $.proxy(function (obj, datum) {
                if (typeaheadDatasets.valueKey)
                  self.add(datum[typeaheadDatasets.valueKey]);
                else
                  self.add(datum);
                self.$input.typeahead('val', '');
              }, self));
          }
    
          self.$container.on('click', $.proxy(function(event) {
            if (! self.$element.attr('disabled')) {
              self.$input.removeAttr('disabled');
            }
            self.$input.focus();
          }, self));
    
            if (self.options.addOnBlur && self.options.freeInput) {
              self.$input.on('focusout', $.proxy(function(event) {
                  // HACK: only process on focusout when no typeahead opened, to
                  //       avoid adding the typeahead text as tag
                  if ($('.typeahead, .twitter-typeahead', self.$container).length === 0) {
                    self.add(self.$input.val());
                    self.$input.val('');
                  }
              }, self));
            }
    
          // Toggle the 'focus' css class on the container when it has focus
          self.$container.on({
            focusin: function() {
              self.$container.addClass(self.options.focusClass);
            },
            focusout: function() {
              self.$container.removeClass(self.options.focusClass);
            },
          });
    
          self.$container.on('keydown', 'input', $.proxy(function(event) {
            var $input = $(event.target),
                $inputWrapper = self.findInputWrapper();
    
            if (self.$element.attr('disabled')) {
              self.$input.attr('disabled', 'disabled');
              return;
            }
    
            switch (event.which) {
              // BACKSPACE
              case 8:
                if (doGetCaretPosition($input[0]) === 0) {
                  var prev = $inputWrapper.prev();
                  if (prev.length) {
                    self.remove(prev.data('item'));
                  }
                }
                break;
    
              // DELETE
              case 46:
                if (doGetCaretPosition($input[0]) === 0) {
                  var next = $inputWrapper.next();
                  if (next.length) {
                    self.remove(next.data('item'));
                  }
                }
                break;
    
              // LEFT ARROW
              case 37:
                // Try to move the input before the previous tag
                var $prevTag = $inputWrapper.prev();
                if ($input.val().length === 0 && $prevTag[0]) {
                  $prevTag.before($inputWrapper);
                  $input.focus();
                }
                break;
              // RIGHT ARROW
              case 39:
                // Try to move the input after the next tag
                var $nextTag = $inputWrapper.next();
                if ($input.val().length === 0 && $nextTag[0]) {
                  $nextTag.after($inputWrapper);
                  $input.focus();
                }
                break;
             default:
                 // ignore
             }
    
            // Reset internal input's size
            var textLength = $input.val().length,
                wordSpace = Math.ceil(textLength / 5),
                size = textLength + wordSpace + 1;
            $input.attr('size', Math.max(this.inputSize, $input.val().length));
          }, self));
    
          self.$container.on('keypress', 'input', $.proxy(function(event) {
             var $input = $(event.target);
    
             if (self.$element.attr('disabled')) {
                self.$input.attr('disabled', 'disabled');
                return;
             }
    
             var text = $input.val(),
             maxLengthReached = self.options.maxChars && text.length >= self.options.maxChars;
             if (self.options.freeInput && (keyCombinationInList(event, self.options.confirmKeys) || maxLengthReached)) {
                // Only attempt to add a tag if there is data in the field
                if (text.length !== 0) {
                   self.add(maxLengthReached ? text.substr(0, self.options.maxChars) : text);
                   $input.val('');
                }
    
                // If the field is empty, let the event triggered fire as usual
                if (self.options.cancelConfirmKeysOnEmpty === false) {
                    event.preventDefault();
                }
             }
    
             // Reset internal input's size
             var textLength = $input.val().length,
                wordSpace = Math.ceil(textLength / 5),
                size = textLength + wordSpace + 1;
             $input.attr('size', Math.max(this.inputSize, $input.val().length));
          }, self));
    
          // Remove icon clicked
          self.$container.on('click', '[data-role=remove]', $.proxy(function(event) {
            if (self.$element.attr('disabled')) {
              return;
            }
            self.remove($(event.target).closest('.tag').data('item'));
          }, self));
    
          // Only add existing value as tags when using strings as tags
          if (self.options.itemValue === defaultOptions.itemValue) {
            if (self.$element[0].tagName === 'INPUT') {
                self.add(self.$element.val());
            } else {
              $('option', self.$element).each(function() {
                self.add($(this).attr('value'), true);
              });
            }
          }
        },
    
        /**
         * Removes all tagsinput behaviour and unregsiter all event handlers
         */
        destroy: function() {
          var self = this;
    
          // Unbind events
          self.$container.off('keypress', 'input');
          self.$container.off('click', '[role=remove]');
    
          self.$container.remove();
          self.$element.removeData('tagsinput');
          self.$element.show();
        },
    
        /**
         * Sets focus on the tagsinput
         */
        focus: function() {
          this.$input.focus();
        },
    
        /**
         * Returns the internal input element
         */
        input: function() {
          return this.$input;
        },
    
        /**
         * Returns the element which is wrapped around the internal input. This
         * is normally the $container, but typeahead.js moves the $input element.
         */
        findInputWrapper: function() {
          var elt = this.$input[0],
              container = this.$container[0];
          while(elt && elt.parentNode !== container)
            elt = elt.parentNode;
    
          return $(elt);
        }
      };
    
      /**
       * Register JQuery plugin
       */
      $.fn.tagsinput = function(arg1, arg2, arg3) {
        var results = [];
    
        this.each(function() {
          var tagsinput = $(this).data('tagsinput');
          // Initialize a new tags input
          if (!tagsinput) {
              tagsinput = new TagsInput(this, arg1);
              $(this).data('tagsinput', tagsinput);
              results.push(tagsinput);
    
              if (this.tagName === 'SELECT') {
                  $('option', $(this)).attr('selected', 'selected');
              }
    
              // Init tags from $(this).val()
              $(this).val($(this).val());
          } else if (!arg1 && !arg2) {
              // tagsinput already exists
              // no function, trying to init
              results.push(tagsinput);
          } else if(tagsinput[arg1] !== undefined) {
              // Invoke function on existing tags input
                if(tagsinput[arg1].length === 3 && arg3 !== undefined){
                   var retVal = tagsinput[arg1](arg2, null, arg3);
                }else{
                   var retVal = tagsinput[arg1](arg2);
                }
              if (retVal !== undefined)
                  results.push(retVal);
          }
        });
    
        if ( typeof arg1 == 'string') {
          // Return the results from the invoked function calls
          return results.length > 1 ? results : results[0];
        } else {
          return results;
        }
      };
    
      $.fn.tagsinput.Constructor = TagsInput;
    
      /**
       * Most options support both a string or number as well as a function as
       * option value. This function makes sure that the option with the given
       * key in the given options is wrapped in a function
       */
      function makeOptionItemFunction(options, key) {
        if (typeof options[key] !== 'function') {
          var propertyName = options[key];
          options[key] = function(item) { return item[propertyName]; };
        }
      }
      function makeOptionFunction(options, key) {
        if (typeof options[key] !== 'function') {
          var value = options[key];
          options[key] = function() { return value; };
        }
      }
      /**
       * HtmlEncodes the given value
       */
      var htmlEncodeContainer = $('<div />');
      function htmlEncode(value) {
        if (value) {
          return htmlEncodeContainer.text(value).html();
        } else {
          return '';
        }
      }
    
      /**
       * Returns the position of the caret in the given input field
       * http://flightschool.acylt.com/devnotes/caret-position-woes/
       */
      function doGetCaretPosition(oField) {
        var iCaretPos = 0;
        if (document.selection) {
          oField.focus ();
          var oSel = document.selection.createRange();
          oSel.moveStart ('character', -oField.value.length);
          iCaretPos = oSel.text.length;
        } else if (oField.selectionStart || oField.selectionStart == '0') {
          iCaretPos = oField.selectionStart;
        }
        return (iCaretPos);
      }
    
      /**
        * Returns boolean indicates whether user has pressed an expected key combination.
        * @param object keyPressEvent: JavaScript event object, refer
        *     http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
        * @param object lookupList: expected key combinations, as in:
        *     [13, {which: 188, shiftKey: true}]
        */
      function keyCombinationInList(keyPressEvent, lookupList) {
          var found = false;
          $.each(lookupList, function (index, keyCombination) {
              if (typeof (keyCombination) === 'number' && keyPressEvent.which === keyCombination) {
                  found = true;
                  return false;
              }
    
              if (keyPressEvent.which === keyCombination.which) {
                  var alt = !keyCombination.hasOwnProperty('altKey') || keyPressEvent.altKey === keyCombination.altKey,
                      shift = !keyCombination.hasOwnProperty('shiftKey') || keyPressEvent.shiftKey === keyCombination.shiftKey,
                      ctrl = !keyCombination.hasOwnProperty('ctrlKey') || keyPressEvent.ctrlKey === keyCombination.ctrlKey;
                  if (alt && shift && ctrl) {
                      found = true;
                      return false;
                  }
              }
          });
    
          return found;
      }
    
      /**
       * Initialize tagsinput behaviour on inputs and selects which have
       * data-role=tagsinput
       */
      $(function() {
        $("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();
      });
    
    
    
    
    
    
    
    
            
    
    
        $('#member_id input[name="member"]').on('click', function() {
            if ($(this).val() == 'individual'){
                $('#member_no').hide();
            }
            if ($(this).val() == 'company') {
                $('#member_no').hide();
            }       
            if ($(this).val() == 'developers') {
                $('#member_no').show();
            }
            else {
            }
        });
        
        
        $('#work_type input[name="work"]').on('click', function() {
            if ($(this).val() == 'distant') {
                $('#distant').show();
                $('#local').hide();
            }
            if ($(this).val() == 'local') {
                $('#distant').hide();
                $('#local').show();
            }       
            if ($(this).val() == 'upload') {
                $('#distant').hide();
                $('#local').hide();
            }
            else {
            }
        });
        
        $('#job_type input[name="job"]').on('change', function() {
            if ((this.checked == true) && ($(this).val() == 'job_2')) {
                $('#job_date').show();
            }
            else if ((this.checked == false) && ($(this).val() == 'job_2')){
                $('#job_date').hide();
            }
        });
        
        $('#price_type').on('change', function() {
            if ($(".price-cont select option:selected").val() == '1') {
                $('#price_id').show();
                $('#hour_id').hide();
            }
            else if ($(".price-cont select option:selected").val() == '2') {
                $('#price_id').hide();
                $('#hour_id').show();
            }       
            else if ($(".price-cont select option:selected").val() == '3') {
                $('#price_id').hide();
                $('#hour_id').hide();
            }       
            else if ($("select option:selected").val() == '0') {
                $('#price_id').hide();
                $('#hour_id').hide();
            }
        });
        
        $('#pro_period input[name="period"]').on('click', function() {
            if ($(this).val() == 'period') {
                $('#period_date').hide();
            }
            else if ($(this).val() == 'job') {
                $('#period_date').show();
            }   
        });
        
        // Education Add More
        
        $(".billing-method").on('click','.trash', function () {
            $(this).closest('.education-cont').remove();
            return false;
        });
    
        $(".add-bill").on('click', function () {
            
            var billingcontent = '<div class="row form-row education-cont">' +
                '<div class="col-12 col-md-10 col-lg-11">' +
                    '<div class="row form-row">' +
                        '<div class="col-12 col-md-12">' +
                            '<div class="form-group">' +
                                '<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
                                '<input type="text" class="form-control">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-md-2 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
            '</div>';
            
            $(".billing-method").append(billingcontent);
            return false;
        });
        
        // Experience Add More
        
        $(".links-info").on('click','.trash', function () {
            $(this).closest('.links-cont').remove();
            return false;
        });
    
        $(".add-links").on('click', function () {
            
            var experiencecontent = '<div class="row form-row links-cont">' +
                '<div class="col-12 col-md-11 col-lg-11">' +
                    '<div class="form-group">' +
                        '<label>Add</label>' +
                        '<input type="text" class="form-control">' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-md-1 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
            '</div>';
            
            $(".links-info").append(experiencecontent);
            return false;
        });
        
        // Award Add 
        
        $(".award-info").on('click','.trash-icon', function () {
            $(this).closest('.award-cont').remove();
            return false;
        });
    
        $(".add-award").on('click', function () {
            
            var awardcontent = '<div class="form-row align-items-center award-cont">' +
                '<div class="form-group col-md-2">' +
                    '<label class="award-upload image-upbtn">' +
                    '<i class="fas fa-plus"></i> <input type="file">' +
                    '</label>' +
                '</div>' +
                '<div class="form-group col-md-5">' +
                    '<input type="text" class="form-control">' +
                '</div>' +
                '<div class="form-group col-md-3">' +
                    '<input type="text" class="form-control datetimepicker">' +
                '</div>' +
                '<div class="form-group col-md-2"><a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a></div>' +
            '</div>';
            
            $(".award-info").append(awardcontent);
            return false;
        });
        
        // Add Language 
        
        $(".lang-info").on('click','.trash-icon', function () {
            $(this).closest('.award-cont').remove();
            return false;
        });
    
        $(".add-lang").on('click', function () {
            
            var langcontent = '<div class="form-row align-items-center lang-cont">' +
                '<div class="form-group col-md-7">' +
                    '<input type="text" class="form-control">' +
                '</div>' +
                '<div class="form-group col-md-3">' +
                    '<input type="text" class="form-control">' +
                '</div>' +
                '<div class="form-group col-md-2"><a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a></div>' +
            '</div>';
            
            $(".lang-info").append(langcontent);
            return false;
        });
        
        // Add skill 
        
        $(".skill-info").on('click','.trash-icon', function () {
            $(this).closest('.skill-cont').remove();
            return false;
        });
    
        $(".skill-add").on('click', function () {
            
            var skillcontent = '<div class="form-row align-items-center skill-cont">' +
                '<div class="form-group col-md-10">' +
                    '<input type="text" class="form-control">' +
                '</div>' +
                '<div class="form-group col-md-2"><a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a></div>' +
            '</div>';
            
            $(".skill-info").append(skillcontent);
            return false;
        });
        
        // Add Experience 
        
        $(".exp-info").on('click','.trash-icon', function () {
            $(this).closest('.exp-cont').remove();
            return false;
        });
    
        $(".add-exp").on('click', function () {
            
            var expcontent = '<div class="form-row align-items-center exp-cont">' +
                '<div class="form-group col-md-6">' +               
                    '<label>Title</label>' +
                    '<input type="text" class="form-control">' +
                '</div>' +
                '<div class="form-group col-md-6">' +               
                    '<label>Company name</label>' +
                    '<input type="text" class="form-control">' +
                '</div>' +
                '<div class="form-group col-md-6">' +           
                    '<label>Start date</label>' +
                    '<input type="text" class="form-control datetimepicker">' +
                '</div>' +
                '<div class="form-group col-md-6">' +           
                    '<label>End date</label>' +
                    '<input type="text" class="form-control datetimepicker">' +
                '</div>' +
                '<div class="form-group col-md-12">' +          
                    '<label class="custom_check">' +
                    '<input type="checkbox" name="rem_password">' +
                    '<span class="checkmark"></span> Im currently working here' +
                    '</label>' +
                '</div>' +
                '<div class="form-group col-md-12">' +          
                    '<label>Summary</label>' +
                    '<textarea class="form-control" rows="5"></textarea>' +
                '</div>' +
                '<div class="form-group col-md-2"><a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a></div>' +
            '</div>';
            
            $(".exp-info").append(expcontent);
            return false;
        });
        
        // Tax Add More
        
        $(".tax-info").on('click','.trash', function () {
            $(this).closest('.tax-cont').remove();
            return false;
        });
    
        $(".add-tax").on('click', function () {
        
            var taxcontent = '<div class="form-row tax-cont">' +
                '<div class="col-12 col-md-3 col-lg-3">' +
                    '<div class="form-group">' +
                        '<input type="text" class="form-control">' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-md-4 col-lg-4">' +
                    '<div class="form-group">' +
                        '<input type="text" class="form-control">' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-md-4 col-lg-4">' +
                    '<div class="form-group">' +
                        '<input type="text" class="form-control">' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-md-1 col-lg-1"><a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
            '</div>';
            
            $(".tax-info").append(taxcontent);
            return false;
        });
        
        // Awards Add More
        
        $(".awards-info").on('click','.trash', function () {
            $(this).closest('.awards-cont').remove();
            return false;
        });
    
        $(".add-award").on('click', function () {
    
            var regcontent = '<div class="row form-row awards-cont">' +
                '<div class="col-12 col-md-5">' +
                    '<div class="form-group">' +
                        '<label>Awards</label>' +
                        '<input type="text" class="form-control">' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-md-5">' +
                    '<div class="form-group">' +
                        '<label>Year</label>' +
                        '<input type="text" class="form-control">' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-md-2">' +
                    '<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
                    '<a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a>' +
                '</div>' +
            '</div>';
            
            $(".awards-info").append(regcontent);
            return false;
        });
        
        // Membership Add More
        
        $(".membership-info").on('click','.trash', function () {
            $(this).closest('.membership-cont').remove();
            return false;
        });
    
        $(".add-membership").on('click', function () {
    
            var membershipcontent = '<div class="row form-row membership-cont">' +
                '<div class="col-12 col-md-10 col-lg-5">' +
                    '<div class="form-group">' +
                        '<label>Memberships</label>' +
                        '<input type="text" class="form-control">' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-md-2 col-lg-2">' +
                    '<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
                    '<a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a>' +
                '</div>' +
            '</div>';
            
            $(".membership-info").append(membershipcontent);
            return false;
        });
        
        // Registration Add More
        
        $(".registrations-info").on('click','.trash', function () {
            $(this).closest('.reg-cont').remove();
            return false;
        });
    
        $(".add-reg").on('click', function () {
    
            var regcontent = '<div class="row form-row reg-cont">' +
                '<div class="col-12 col-md-5">' +
                    '<div class="form-group">' +
                        '<label>Registrations</label>' +
                        '<input type="text" class="form-control">' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-md-5">' +
                    '<div class="form-group">' +
                        '<label>Year</label>' +
                        '<input type="text" class="form-control">' +
                    '</div>' +
                '</div>' +
                '<div class="col-12 col-md-2">' +
                    '<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
                    '<a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a>' +
                '</div>' +
            '</div>';
            
            $(".registrations-info").append(regcontent);
            return false;
        });
          
        
        },
    }
    </script>
    