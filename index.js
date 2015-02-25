
/**
 * Init webgl context.
 * 
 * @param  {Element} canvas
 * @return {WebGLContext}
 * @api public
 */

module.exports = function(canvas) {
  var context;
  try { 
    context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  } 
  catch(e) {}
  return context;
}