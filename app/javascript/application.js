// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

// import "bootstrap-sprockets";
// import "bootstrap";

// import { Turbo } from "@hotwired/turbo-rails"
// Turbo.session.drive = false

// //= require jquery
// //= require jquery-ui

// //= require "bootstrap-sprockets";import "channels"

function scrollToBottom() {
  if ($("#messages").length > 0) {
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
  }
}

$(document).ready(function () {
  scrollToBottom();
});
