/**
 * Object WebGLContextAttributes
 * 
 * @description The WebGLContextAttributes interface contains drawing surface attributes and is
 * passed as the second parameter to getContext. This interface holds key/value
 * pairs, where each key and value is a string. The keys identify the feature being
 * set to the given value, which is typically a boolean ("true" or "false") or
 * numeric value.
 * 
 * @constructor
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLContextAttributes(){};
/**
 * Function get
 * @memberOf WebGLContextAttributes
 * @param {DOMString} name
 * @returns {DOMString}
 */
WebGLContextAttributes.prototype.get = function(name){ return new DOMString(); };
/**
 * Function set
 * @memberOf WebGLContextAttributes
 * @param {DOMString} name
 * @param {DOMString} value
 */
WebGLContextAttributes.prototype.set = function(name, value){};
/**
 * Function remove
 * @memberOf WebGLContextAttributes
 * @param {DOMString} name
 */
WebGLContextAttributes.prototype.remove = function(name){};

/**
 * Object WebGLObject
 * 
 * @description The WebGLObject interface is the parent interface for all GL objects.
 * 
 * @constructor
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLObject(){};

/**
 * Object WebGLBuffer
 * 
 * @description The WebGLBuffer interface represents an OpenGL Buffer Object. The underlying
 * object is created as if by calling  glGenBuffers  , bound as if by calling 
 * glBindBuffer  and destroyed as if by calling  glDeleteBuffers.
 * 
 * @constructor
 * @augments WebGLObject
 * @see WebGLObject
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLBuffer(){};
WebGLBuffer.prototype = new WebGLObject();

/**
 * Object WebGLFramebuffer
 * 
 * @description The WebGLFramebuffer interface represents an OpenGL Framebuffer Object. The
 * underlying object is created as if by calling  glGenFramebuffers  , bound as if
 * by calling  glBindFramebuffer  and destroyed as if by calling 
 * glDeleteFramebuffers.
 * 
 * @constructor
 * @augments WebGLObject
 * @see WebGLObject
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLFramebuffer(){};
WebGLFramebuffer.prototype = new WebGLObject();

/**
 * Object WebGLProgram
 * 
 * @description The WebGLProgram interface represents an OpenGL Program Object. The underlying
 * object is created as if by calling  glCreateProgram  , used as if by calling 
 * glUseProgram  and destroyed as if by calling  glDeleteProgram.
 * 
 * @constructor
 * @augments WebGLObject
 * @see WebGLObject
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLProgram(){};
WebGLProgram.prototype = new WebGLObject();

/**
 * Object WebGLRenderbuffer
 * 
 * @description The WebGLRenderbuffer interface represents an OpenGL Renderbuffer Object. The
 * underlying object is created as if by calling  glGenRenderbuffers  , bound as if
 * by calling  glBindRenderbuffer  and destroyed as if by calling 
 * glDeleteRenderbuffers.
 * 
 * @constructor
 * @augments WebGLObject
 * @see WebGLObject
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLRenderbuffer(){};
WebGLRenderbuffer.prototype = new WebGLObject();

/**
 * Object WebGLShader
 * 
 * @description The WebGLShader interface represents an OpenGL Shader Object. The underlying
 * object is created as if by calling  glCreateShader  , attached to a Program as
 * if by calling  glAttachShader  and destroyed as if by calling  glDeleteShader.
 * 
 * @constructor
 * @augments WebGLObject
 * @see WebGLObject
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLShader(){};
WebGLShader.prototype = new WebGLObject();

/**
 * Object WebGLTexture
 * 
 * @description The WebGLTexture interface represents an OpenGL Texture Object. The underlying
 * object is created as if by calling  glGenTextures  , bound as if by calling 
 * glBindTexture  and destroyed as if by calling  glDeleteTextures.
 * 
 * @constructor
 * @augments WebGLObject
 * @see WebGLObject
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLTexture(){};
WebGLTexture.prototype = new WebGLObject();

/**
 * Object WebGLObjectArray
 * 
 * @description The WebGLObjectArray interface represents an array of WebGLObject objects.
 * 
 * @constructor
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLObjectArray(){};
/**
 * Propery length
 * @type unsigned long
 */
WebGLObjectArray.prototype.length = 0;
/**
 * Function get
 * @memberOf WebGLObjectArray
 * @param {unsigned long} index
 * @returns {WebGLObject}
 */
WebGLObjectArray.prototype.get = function(index){ return new WebGLObject(); };

/**
 * Object WebGLUniformLocation
 * 
 * @description The WebGLUniformLocation interface represents the location of a uniform variable
 * in a shader program.
 * 
 * @constructor
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLUniformLocation(){};

/**
 * Object WebGLActiveInfo
 * 
 * @description The WebGLActiveInfo interface represents the information returned from the
 * getActiveAttrib and getActiveUniform calls.
 * 
 * @constructor
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLActiveInfo(){};
/**
 * Propery size
 * @type GLint
 */
WebGLActiveInfo.prototype.size = 0;
/**
 * Propery type
 * @type GLenum
 */
WebGLActiveInfo.prototype.type = new GLenum();
/**
 * Propery name
 * @type DOMString
 */
WebGLActiveInfo.prototype.name = new DOMString();

/**
 * Object WebGLArrayBuffer
 * 
 * @description The WebGLArrayBuffer interface describes the buffer used to store data for the
 * WebGLArray interface and its subclasses.
 * 
 * @constructor
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLArrayBuffer(){};
/**
 * Propery byteLength
 * @type unsigned long
 */
WebGLArrayBuffer.prototype.byteLength = 0;

/**
 * Object WebGLArray
 * 
 * @description The WebGLArray interface is the abstract base interface for all the typed array
 * interfaces. Every WebGLArray subclass presents a typed view of a
 * WebGLArrayBuffer region. Multiple WebGLArrays can reference the same or
 * overlapping regions of a WebGLArrayBuffer.
 * 
 * @constructor
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLArray(){};
/**
 * Propery buffer
 * @type WebGLArrayBuffer
 */
WebGLArray.prototype.buffer = new WebGLArrayBuffer();
/**
 * Propery byteOffset
 * @type unsigned long
 */
WebGLArray.prototype.byteOffset = 0;
/**
 * Propery byteLength
 * @type unsigned long
 */
WebGLArray.prototype.byteLength = 0;
/**
 * Propery length
 * @type unsigned long
 */
WebGLArray.prototype.length = 0;
/**
 * Function slice
 * @memberOf WebGLArray
 * @param {unsigned long} offset
 * @param {unsigned long} length
 * @returns {WebGLArray}
 */
WebGLArray.prototype.slice = function(offset, length){ return new WebGLArray(); };

/**
 * Object WebGLByteArray
 * 
 * @description A WebGLByteArray represents an array of 8-bit signed integer values.   A
 * WebGLByteArray has an element size of 1 byte.
 * 
 * @constructor
 * @augments WebGLArray
 * @see WebGLArray
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLByteArray(){};
WebGLByteArray.prototype = new WebGLArray();
/**
 * Function get
 * @memberOf WebGLByteArray
 * @param {unsigned long} index
 * @returns {long}
 */
WebGLByteArray.prototype.get = function(index){ return new long(); };
/**
 * Function set
 * @memberOf WebGLByteArray
 * @param {unsigned long} index
 * @param {long} value
 */
WebGLByteArray.prototype.set = function(index, value){};
/**
 * Function set
 * @memberOf WebGLByteArray
 * @param {WebGLByteArray} array
 * @param {unsigned long} offset
 */
WebGLByteArray.prototype.set = function(array, offset){};
/**
 * Function set
 * @memberOf WebGLByteArray
 * @param {sequence<long>} array
 * @param {unsigned long} offset
 */
WebGLByteArray.prototype.set = function(array, offset){};

/**
 * Object WebGLUnsignedByteArray
 * 
 * @description A WebGLUnsignedByteArray represents an array of 8-bit unsigned integer values.  
 * A WebGLUnsignedByteArray has an element size of 1 byte.
 * 
 * @constructor
 * @augments WebGLArray
 * @see WebGLArray
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLUnsignedByteArray(){};
WebGLUnsignedByteArray.prototype = new WebGLArray();
/**
 * Function get
 * @memberOf WebGLUnsignedByteArray
 * @param {unsigned long} index
 * @returns {long}
 */
WebGLUnsignedByteArray.prototype.get = function(index){ return new long(); };
/**
 * Function set
 * @memberOf WebGLUnsignedByteArray
 * @param {unsigned long} index
 * @param {unsigned long} value
 */
WebGLUnsignedByteArray.prototype.set = function(index, value){};
/**
 * Function set
 * @memberOf WebGLUnsignedByteArray
 * @param {WebGLUnsignedByteArray} array
 * @param {unsigned long} offset
 */
WebGLUnsignedByteArray.prototype.set = function(array, offset){};
/**
 * Function set
 * @memberOf WebGLUnsignedByteArray
 * @param {sequence<unsigned long>} array
 * @param {unsigned long} offset
 */
WebGLUnsignedByteArray.prototype.set = function(array, offset){};

/**
 * Object WebGLShortArray
 * 
 * @description A WebGLShortArray represents an array of 16-bit signed integer values.   A
 * WebGLShortArray has an element size of 2 bytes.
 * 
 * @constructor
 * @augments WebGLArray
 * @see WebGLArray
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLShortArray(){};
WebGLShortArray.prototype = new WebGLArray();
/**
 * Function get
 * @memberOf WebGLShortArray
 * @param {unsigned long} index
 * @returns {long}
 */
WebGLShortArray.prototype.get = function(index){ return new long(); };
/**
 * Function set
 * @memberOf WebGLShortArray
 * @param {unsigned long} index
 * @param {long} value
 */
WebGLShortArray.prototype.set = function(index, value){};
/**
 * Function set
 * @memberOf WebGLShortArray
 * @param {WebGLShortArray} array
 * @param {unsigned long} offset
 */
WebGLShortArray.prototype.set = function(array, offset){};
/**
 * Function set
 * @memberOf WebGLShortArray
 * @param {sequence<long>} array
 * @param {unsigned long} offset
 */
WebGLShortArray.prototype.set = function(array, offset){};

/**
 * Object WebGLUnsignedShortArray
 * 
 * @description A WebGLUnsignedShortArray represents an array of 16-bit unsigned integer values.
 *   A WebGLUnsignedShortArray has an element size of 2 bytes.
 * 
 * @constructor
 * @augments WebGLArray
 * @see WebGLArray
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLUnsignedShortArray(){};
WebGLUnsignedShortArray.prototype = new WebGLArray();
/**
 * Function get
 * @memberOf WebGLUnsignedShortArray
 * @param {unsigned long} index
 * @returns {long}
 */
WebGLUnsignedShortArray.prototype.get = function(index){ return new long(); };
/**
 * Function set
 * @memberOf WebGLUnsignedShortArray
 * @param {unsigned long} index
 * @param {unsigned long} value
 */
WebGLUnsignedShortArray.prototype.set = function(index, value){};
/**
 * Function set
 * @memberOf WebGLUnsignedShortArray
 * @param {WebGLUnsignedShortArray} array
 * @param {unsigned long} offset
 */
WebGLUnsignedShortArray.prototype.set = function(array, offset){};
/**
 * Function set
 * @memberOf WebGLUnsignedShortArray
 * @param {sequence<unsigned long>} array
 * @param {unsigned long} offset
 */
WebGLUnsignedShortArray.prototype.set = function(array, offset){};

/**
 * Object WebGLIntArray
 * 
 * @description A WebGLIntArray represents an array of 32-bit signed integer values.   A
 * WebGLIntArray has an element size of 4 bytes.
 * 
 * @constructor
 * @augments WebGLArray
 * @see WebGLArray
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLIntArray(){};
WebGLIntArray.prototype = new WebGLArray();
/**
 * Function get
 * @memberOf WebGLIntArray
 * @param {unsigned long} index
 * @returns {long}
 */
WebGLIntArray.prototype.get = function(index){ return new long(); };
/**
 * Function set
 * @memberOf WebGLIntArray
 * @param {unsigned long} index
 * @param {long} value
 */
WebGLIntArray.prototype.set = function(index, value){};
/**
 * Function set
 * @memberOf WebGLIntArray
 * @param {WebGLIntArray} array
 * @param {unsigned long} offset
 */
WebGLIntArray.prototype.set = function(array, offset){};
/**
 * Function set
 * @memberOf WebGLIntArray
 * @param {sequence<long>} array
 * @param {unsigned long} offset
 */
WebGLIntArray.prototype.set = function(array, offset){};

/**
 * Object WebGLUnsignedIntArray
 * 
 * @description A WebGLUnsignedIntArray represents an array of 32-bit unsigned integer values.  
 * A WebGLUnsignedIntArray has an element size of 4 bytes.
 * 
 * @constructor
 * @augments WebGLArray
 * @see WebGLArray
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLUnsignedIntArray(){};
WebGLUnsignedIntArray.prototype = new WebGLArray();
/**
 * Function get
 * @memberOf WebGLUnsignedIntArray
 * @param {unsigned long} index
 * @returns {long}
 */
WebGLUnsignedIntArray.prototype.get = function(index){ return new long(); };
/**
 * Function set
 * @memberOf WebGLUnsignedIntArray
 * @param {unsigned long} index
 * @param {unsigned long} value
 */
WebGLUnsignedIntArray.prototype.set = function(index, value){};
/**
 * Function set
 * @memberOf WebGLUnsignedIntArray
 * @param {WebGLUnsignedIntArray} array
 * @param {unsigned long} offset
 */
WebGLUnsignedIntArray.prototype.set = function(array, offset){};
/**
 * Function set
 * @memberOf WebGLUnsignedIntArray
 * @param {sequence<unsigned long>} array
 * @param {unsigned long} offset
 */
WebGLUnsignedIntArray.prototype.set = function(array, offset){};

/**
 * Object WebGLFloatArray
 * 
 * @description A WebGLFloatArray represents an array of 32-bit floating point values.   A
 * WebGLFloatArray has an element size of 4 bytes.
 * 
 * @constructor
 * @augments WebGLArray
 * @see WebGLArray
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLFloatArray(){};
WebGLFloatArray.prototype = new WebGLArray();
/**
 * Function get
 * @memberOf WebGLFloatArray
 * @param {unsigned long} index
 * @returns {float}
 */
WebGLFloatArray.prototype.get = function(index){ return new float(); };
/**
 * Function set
 * @memberOf WebGLFloatArray
 * @param {unsigned long} index
 * @param {float} value
 */
WebGLFloatArray.prototype.set = function(index, value){};
/**
 * Function set
 * @memberOf WebGLFloatArray
 * @param {WebGLFloatArray} array
 * @param {unsigned long} offset
 */
WebGLFloatArray.prototype.set = function(array, offset){};
/**
 * Function set
 * @memberOf WebGLFloatArray
 * @param {sequence<float>} array
 * @param {unsigned long} offset
 */
WebGLFloatArray.prototype.set = function(array, offset){};

/**
 * Object WebGLRenderingContext
 * 
 * @description The WebGLRenderingContext represents the API allowing OpenGL ES 2.0 style
 * rendering into the canvas element.
 * 
 * @constructor
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLRenderingContext(){};
/**
 * Constant DEPTH_BUFFER_BIT
 * @type GLenum
 * @constant
 * @default 0x00000100
 */
WebGLRenderingContext.prototype.DEPTH_BUFFER_BIT = 0x00000100;
/**
 * Constant STENCIL_BUFFER_BIT
 * @type GLenum
 * @constant
 * @default 0x00000400
 */
WebGLRenderingContext.prototype.STENCIL_BUFFER_BIT = 0x00000400;
/**
 * Constant COLOR_BUFFER_BIT
 * @type GLenum
 * @constant
 * @default 0x00004000
 */
WebGLRenderingContext.prototype.COLOR_BUFFER_BIT = 0x00004000;
/**
 * Constant POINTS
 * @type GLenum
 * @constant
 * @default 0x0000
 */
WebGLRenderingContext.prototype.POINTS = 0x0000;
/**
 * Constant LINES
 * @type GLenum
 * @constant
 * @default 0x0001
 */
WebGLRenderingContext.prototype.LINES = 0x0001;
/**
 * Constant LINE_LOOP
 * @type GLenum
 * @constant
 * @default 0x0002
 */
WebGLRenderingContext.prototype.LINE_LOOP = 0x0002;
/**
 * Constant LINE_STRIP
 * @type GLenum
 * @constant
 * @default 0x0003
 */
WebGLRenderingContext.prototype.LINE_STRIP = 0x0003;
/**
 * Constant TRIANGLES
 * @type GLenum
 * @constant
 * @default 0x0004
 */
WebGLRenderingContext.prototype.TRIANGLES = 0x0004;
/**
 * Constant TRIANGLE_STRIP
 * @type GLenum
 * @constant
 * @default 0x0005
 */
WebGLRenderingContext.prototype.TRIANGLE_STRIP = 0x0005;
/**
 * Constant TRIANGLE_FAN
 * @type GLenum
 * @constant
 * @default 0x0006
 */
WebGLRenderingContext.prototype.TRIANGLE_FAN = 0x0006;
/**
 * Constant ZERO
 * @type GLenum
 * @constant
 * @default 0
 */
WebGLRenderingContext.prototype.ZERO = 0;
/**
 * Constant ONE
 * @type GLenum
 * @constant
 * @default 1
 */
WebGLRenderingContext.prototype.ONE = 1;
/**
 * Constant SRC_COLOR
 * @type GLenum
 * @constant
 * @default 0x0300
 */
WebGLRenderingContext.prototype.SRC_COLOR = 0x0300;
/**
 * Constant ONE_MINUS_SRC_COLOR
 * @type GLenum
 * @constant
 * @default 0x0301
 */
WebGLRenderingContext.prototype.ONE_MINUS_SRC_COLOR = 0x0301;
/**
 * Constant SRC_ALPHA
 * @type GLenum
 * @constant
 * @default 0x0302
 */
WebGLRenderingContext.prototype.SRC_ALPHA = 0x0302;
/**
 * Constant ONE_MINUS_SRC_ALPHA
 * @type GLenum
 * @constant
 * @default 0x0303
 */
WebGLRenderingContext.prototype.ONE_MINUS_SRC_ALPHA = 0x0303;
/**
 * Constant DST_ALPHA
 * @type GLenum
 * @constant
 * @default 0x0304
 */
WebGLRenderingContext.prototype.DST_ALPHA = 0x0304;
/**
 * Constant ONE_MINUS_DST_ALPHA
 * @type GLenum
 * @constant
 * @default 0x0305
 */
WebGLRenderingContext.prototype.ONE_MINUS_DST_ALPHA = 0x0305;
/**
 * Constant DST_COLOR
 * @type GLenum
 * @constant
 * @default 0x0306
 */
WebGLRenderingContext.prototype.DST_COLOR = 0x0306;
/**
 * Constant ONE_MINUS_DST_COLOR
 * @type GLenum
 * @constant
 * @default 0x0307
 */
WebGLRenderingContext.prototype.ONE_MINUS_DST_COLOR = 0x0307;
/**
 * Constant SRC_ALPHA_SATURATE
 * @type GLenum
 * @constant
 * @default 0x0308
 */
WebGLRenderingContext.prototype.SRC_ALPHA_SATURATE = 0x0308;
/**
 * Constant FUNC_ADD
 * @type GLenum
 * @constant
 * @default 0x8006
 */
WebGLRenderingContext.prototype.FUNC_ADD = 0x8006;
/**
 * Constant BLEND_EQUATION
 * @type GLenum
 * @constant
 * @default 0x8009
 */
WebGLRenderingContext.prototype.BLEND_EQUATION = 0x8009;
/**
 * Constant BLEND_EQUATION_RGB
 * @type GLenum
 * @constant
 * @default 0x8009
 */
WebGLRenderingContext.prototype.BLEND_EQUATION_RGB = 0x8009;
/**
 * Constant BLEND_EQUATION_ALPHA
 * @type GLenum
 * @constant
 * @default 0x883D
 */
WebGLRenderingContext.prototype.BLEND_EQUATION_ALPHA = 0x883D;
/**
 * Constant FUNC_SUBTRACT
 * @type GLenum
 * @constant
 * @default 0x800A
 */
WebGLRenderingContext.prototype.FUNC_SUBTRACT = 0x800A;
/**
 * Constant FUNC_REVERSE_SUBTRACT
 * @type GLenum
 * @constant
 * @default 0x800B
 */
WebGLRenderingContext.prototype.FUNC_REVERSE_SUBTRACT = 0x800B;
/**
 * Constant BLEND_DST_RGB
 * @type GLenum
 * @constant
 * @default 0x80C8
 */
WebGLRenderingContext.prototype.BLEND_DST_RGB = 0x80C8;
/**
 * Constant BLEND_SRC_RGB
 * @type GLenum
 * @constant
 * @default 0x80C9
 */
WebGLRenderingContext.prototype.BLEND_SRC_RGB = 0x80C9;
/**
 * Constant BLEND_DST_ALPHA
 * @type GLenum
 * @constant
 * @default 0x80CA
 */
WebGLRenderingContext.prototype.BLEND_DST_ALPHA = 0x80CA;
/**
 * Constant BLEND_SRC_ALPHA
 * @type GLenum
 * @constant
 * @default 0x80CB
 */
WebGLRenderingContext.prototype.BLEND_SRC_ALPHA = 0x80CB;
/**
 * Constant CONSTANT_COLOR
 * @type GLenum
 * @constant
 * @default 0x8001
 */
WebGLRenderingContext.prototype.CONSTANT_COLOR = 0x8001;
/**
 * Constant ONE_MINUS_CONSTANT_COLOR
 * @type GLenum
 * @constant
 * @default 0x8002
 */
WebGLRenderingContext.prototype.ONE_MINUS_CONSTANT_COLOR = 0x8002;
/**
 * Constant CONSTANT_ALPHA
 * @type GLenum
 * @constant
 * @default 0x8003
 */
WebGLRenderingContext.prototype.CONSTANT_ALPHA = 0x8003;
/**
 * Constant ONE_MINUS_CONSTANT_ALPHA
 * @type GLenum
 * @constant
 * @default 0x8004
 */
WebGLRenderingContext.prototype.ONE_MINUS_CONSTANT_ALPHA = 0x8004;
/**
 * Constant BLEND_COLOR
 * @type GLenum
 * @constant
 * @default 0x8005
 */
WebGLRenderingContext.prototype.BLEND_COLOR = 0x8005;
/**
 * Constant ARRAY_BUFFER
 * @type GLenum
 * @constant
 * @default 0x8892
 */
WebGLRenderingContext.prototype.ARRAY_BUFFER = 0x8892;
/**
 * Constant ELEMENT_ARRAY_BUFFER
 * @type GLenum
 * @constant
 * @default 0x8893
 */
WebGLRenderingContext.prototype.ELEMENT_ARRAY_BUFFER = 0x8893;
/**
 * Constant ARRAY_BUFFER_BINDING
 * @type GLenum
 * @constant
 * @default 0x8894
 */
WebGLRenderingContext.prototype.ARRAY_BUFFER_BINDING = 0x8894;
/**
 * Constant ELEMENT_ARRAY_BUFFER_BINDING
 * @type GLenum
 * @constant
 * @default 0x8895
 */
WebGLRenderingContext.prototype.ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
/**
 * Constant STREAM_DRAW
 * @type GLenum
 * @constant
 * @default 0x88E0
 */
WebGLRenderingContext.prototype.STREAM_DRAW = 0x88E0;
/**
 * Constant STATIC_DRAW
 * @type GLenum
 * @constant
 * @default 0x88E4
 */
WebGLRenderingContext.prototype.STATIC_DRAW = 0x88E4;
/**
 * Constant DYNAMIC_DRAW
 * @type GLenum
 * @constant
 * @default 0x88E8
 */
WebGLRenderingContext.prototype.DYNAMIC_DRAW = 0x88E8;
/**
 * Constant BUFFER_SIZE
 * @type GLenum
 * @constant
 * @default 0x8764
 */
WebGLRenderingContext.prototype.BUFFER_SIZE = 0x8764;
/**
 * Constant BUFFER_USAGE
 * @type GLenum
 * @constant
 * @default 0x8765
 */
WebGLRenderingContext.prototype.BUFFER_USAGE = 0x8765;
/**
 * Constant CURRENT_VERTEX_ATTRIB
 * @type GLenum
 * @constant
 * @default 0x8626
 */
WebGLRenderingContext.prototype.CURRENT_VERTEX_ATTRIB = 0x8626;
/**
 * Constant FRONT
 * @type GLenum
 * @constant
 * @default 0x0404
 */
WebGLRenderingContext.prototype.FRONT = 0x0404;
/**
 * Constant BACK
 * @type GLenum
 * @constant
 * @default 0x0405
 */
WebGLRenderingContext.prototype.BACK = 0x0405;
/**
 * Constant FRONT_AND_BACK
 * @type GLenum
 * @constant
 * @default 0x0408
 */
WebGLRenderingContext.prototype.FRONT_AND_BACK = 0x0408;
/**
 * Constant TEXTURE_2D
 * @type GLenum
 * @constant
 * @default 0x0DE1
 */
WebGLRenderingContext.prototype.TEXTURE_2D = 0x0DE1;
/**
 * Constant CULL_FACE
 * @type GLenum
 * @constant
 * @default 0x0B44
 */
WebGLRenderingContext.prototype.CULL_FACE = 0x0B44;
/**
 * Constant BLEND
 * @type GLenum
 * @constant
 * @default 0x0BE2
 */
WebGLRenderingContext.prototype.BLEND = 0x0BE2;
/**
 * Constant DITHER
 * @type GLenum
 * @constant
 * @default 0x0BD0
 */
WebGLRenderingContext.prototype.DITHER = 0x0BD0;
/**
 * Constant STENCIL_TEST
 * @type GLenum
 * @constant
 * @default 0x0B90
 */
WebGLRenderingContext.prototype.STENCIL_TEST = 0x0B90;
/**
 * Constant DEPTH_TEST
 * @type GLenum
 * @constant
 * @default 0x0B71
 */
WebGLRenderingContext.prototype.DEPTH_TEST = 0x0B71;
/**
 * Constant SCISSOR_TEST
 * @type GLenum
 * @constant
 * @default 0x0C11
 */
WebGLRenderingContext.prototype.SCISSOR_TEST = 0x0C11;
/**
 * Constant POLYGON_OFFSET_FILL
 * @type GLenum
 * @constant
 * @default 0x8037
 */
WebGLRenderingContext.prototype.POLYGON_OFFSET_FILL = 0x8037;
/**
 * Constant SAMPLE_ALPHA_TO_COVERAGE
 * @type GLenum
 * @constant
 * @default 0x809E
 */
WebGLRenderingContext.prototype.SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
/**
 * Constant SAMPLE_COVERAGE
 * @type GLenum
 * @constant
 * @default 0x80A0
 */
WebGLRenderingContext.prototype.SAMPLE_COVERAGE = 0x80A0;
/**
 * Constant NO_ERROR
 * @type GLenum
 * @constant
 * @default 0
 */
WebGLRenderingContext.prototype.NO_ERROR = 0;
/**
 * Constant INVALID_ENUM
 * @type GLenum
 * @constant
 * @default 0x0500
 */
WebGLRenderingContext.prototype.INVALID_ENUM = 0x0500;
/**
 * Constant INVALID_VALUE
 * @type GLenum
 * @constant
 * @default 0x0501
 */
WebGLRenderingContext.prototype.INVALID_VALUE = 0x0501;
/**
 * Constant INVALID_OPERATION
 * @type GLenum
 * @constant
 * @default 0x0502
 */
WebGLRenderingContext.prototype.INVALID_OPERATION = 0x0502;
/**
 * Constant OUT_OF_MEMORY
 * @type GLenum
 * @constant
 * @default 0x0505
 */
WebGLRenderingContext.prototype.OUT_OF_MEMORY = 0x0505;
/**
 * Constant CW
 * @type GLenum
 * @constant
 * @default 0x0900
 */
WebGLRenderingContext.prototype.CW = 0x0900;
/**
 * Constant CCW
 * @type GLenum
 * @constant
 * @default 0x0901
 */
WebGLRenderingContext.prototype.CCW = 0x0901;
/**
 * Constant LINE_WIDTH
 * @type GLenum
 * @constant
 * @default 0x0B21
 */
WebGLRenderingContext.prototype.LINE_WIDTH = 0x0B21;
/**
 * Constant ALIASED_POINT_SIZE_RANGE
 * @type GLenum
 * @constant
 * @default 0x846D
 */
WebGLRenderingContext.prototype.ALIASED_POINT_SIZE_RANGE = 0x846D;
/**
 * Constant ALIASED_LINE_WIDTH_RANGE
 * @type GLenum
 * @constant
 * @default 0x846E
 */
WebGLRenderingContext.prototype.ALIASED_LINE_WIDTH_RANGE = 0x846E;
/**
 * Constant CULL_FACE_MODE
 * @type GLenum
 * @constant
 * @default 0x0B45
 */
WebGLRenderingContext.prototype.CULL_FACE_MODE = 0x0B45;
/**
 * Constant FRONT_FACE
 * @type GLenum
 * @constant
 * @default 0x0B46
 */
WebGLRenderingContext.prototype.FRONT_FACE = 0x0B46;
/**
 * Constant DEPTH_RANGE
 * @type GLenum
 * @constant
 * @default 0x0B70
 */
WebGLRenderingContext.prototype.DEPTH_RANGE = 0x0B70;
/**
 * Constant DEPTH_WRITEMASK
 * @type GLenum
 * @constant
 * @default 0x0B72
 */
WebGLRenderingContext.prototype.DEPTH_WRITEMASK = 0x0B72;
/**
 * Constant DEPTH_CLEAR_VALUE
 * @type GLenum
 * @constant
 * @default 0x0B73
 */
WebGLRenderingContext.prototype.DEPTH_CLEAR_VALUE = 0x0B73;
/**
 * Constant DEPTH_FUNC
 * @type GLenum
 * @constant
 * @default 0x0B74
 */
WebGLRenderingContext.prototype.DEPTH_FUNC = 0x0B74;
/**
 * Constant STENCIL_CLEAR_VALUE
 * @type GLenum
 * @constant
 * @default 0x0B91
 */
WebGLRenderingContext.prototype.STENCIL_CLEAR_VALUE = 0x0B91;
/**
 * Constant STENCIL_FUNC
 * @type GLenum
 * @constant
 * @default 0x0B92
 */
WebGLRenderingContext.prototype.STENCIL_FUNC = 0x0B92;
/**
 * Constant STENCIL_FAIL
 * @type GLenum
 * @constant
 * @default 0x0B94
 */
WebGLRenderingContext.prototype.STENCIL_FAIL = 0x0B94;
/**
 * Constant STENCIL_PASS_DEPTH_FAIL
 * @type GLenum
 * @constant
 * @default 0x0B95
 */
WebGLRenderingContext.prototype.STENCIL_PASS_DEPTH_FAIL = 0x0B95;
/**
 * Constant STENCIL_PASS_DEPTH_PASS
 * @type GLenum
 * @constant
 * @default 0x0B96
 */
WebGLRenderingContext.prototype.STENCIL_PASS_DEPTH_PASS = 0x0B96;
/**
 * Constant STENCIL_REF
 * @type GLenum
 * @constant
 * @default 0x0B97
 */
WebGLRenderingContext.prototype.STENCIL_REF = 0x0B97;
/**
 * Constant STENCIL_VALUE_MASK
 * @type GLenum
 * @constant
 * @default 0x0B93
 */
WebGLRenderingContext.prototype.STENCIL_VALUE_MASK = 0x0B93;
/**
 * Constant STENCIL_WRITEMASK
 * @type GLenum
 * @constant
 * @default 0x0B98
 */
WebGLRenderingContext.prototype.STENCIL_WRITEMASK = 0x0B98;
/**
 * Constant STENCIL_BACK_FUNC
 * @type GLenum
 * @constant
 * @default 0x8800
 */
WebGLRenderingContext.prototype.STENCIL_BACK_FUNC = 0x8800;
/**
 * Constant STENCIL_BACK_FAIL
 * @type GLenum
 * @constant
 * @default 0x8801
 */
WebGLRenderingContext.prototype.STENCIL_BACK_FAIL = 0x8801;
/**
 * Constant STENCIL_BACK_PASS_DEPTH_FAIL
 * @type GLenum
 * @constant
 * @default 0x8802
 */
WebGLRenderingContext.prototype.STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
/**
 * Constant STENCIL_BACK_PASS_DEPTH_PASS
 * @type GLenum
 * @constant
 * @default 0x8803
 */
WebGLRenderingContext.prototype.STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
/**
 * Constant STENCIL_BACK_REF
 * @type GLenum
 * @constant
 * @default 0x8CA3
 */
WebGLRenderingContext.prototype.STENCIL_BACK_REF = 0x8CA3;
/**
 * Constant STENCIL_BACK_VALUE_MASK
 * @type GLenum
 * @constant
 * @default 0x8CA4
 */
WebGLRenderingContext.prototype.STENCIL_BACK_VALUE_MASK = 0x8CA4;
/**
 * Constant STENCIL_BACK_WRITEMASK
 * @type GLenum
 * @constant
 * @default 0x8CA5
 */
WebGLRenderingContext.prototype.STENCIL_BACK_WRITEMASK = 0x8CA5;
/**
 * Constant VIEWPORT
 * @type GLenum
 * @constant
 * @default 0x0BA2
 */
WebGLRenderingContext.prototype.VIEWPORT = 0x0BA2;
/**
 * Constant SCISSOR_BOX
 * @type GLenum
 * @constant
 * @default 0x0C10
 */
WebGLRenderingContext.prototype.SCISSOR_BOX = 0x0C10;
/**
 * Constant COLOR_CLEAR_VALUE
 * @type GLenum
 * @constant
 * @default 0x0C22
 */
WebGLRenderingContext.prototype.COLOR_CLEAR_VALUE = 0x0C22;
/**
 * Constant COLOR_WRITEMASK
 * @type GLenum
 * @constant
 * @default 0x0C23
 */
WebGLRenderingContext.prototype.COLOR_WRITEMASK = 0x0C23;
/**
 * Constant UNPACK_ALIGNMENT
 * @type GLenum
 * @constant
 * @default 0x0CF5
 */
WebGLRenderingContext.prototype.UNPACK_ALIGNMENT = 0x0CF5;
/**
 * Constant PACK_ALIGNMENT
 * @type GLenum
 * @constant
 * @default 0x0D05
 */
WebGLRenderingContext.prototype.PACK_ALIGNMENT = 0x0D05;
/**
 * Constant MAX_TEXTURE_SIZE
 * @type GLenum
 * @constant
 * @default 0x0D33
 */
WebGLRenderingContext.prototype.MAX_TEXTURE_SIZE = 0x0D33;
/**
 * Constant MAX_VIEWPORT_DIMS
 * @type GLenum
 * @constant
 * @default 0x0D3A
 */
WebGLRenderingContext.prototype.MAX_VIEWPORT_DIMS = 0x0D3A;
/**
 * Constant SUBPIXEL_BITS
 * @type GLenum
 * @constant
 * @default 0x0D50
 */
WebGLRenderingContext.prototype.SUBPIXEL_BITS = 0x0D50;
/**
 * Constant RED_BITS
 * @type GLenum
 * @constant
 * @default 0x0D52
 */
WebGLRenderingContext.prototype.RED_BITS = 0x0D52;
/**
 * Constant GREEN_BITS
 * @type GLenum
 * @constant
 * @default 0x0D53
 */
WebGLRenderingContext.prototype.GREEN_BITS = 0x0D53;
/**
 * Constant BLUE_BITS
 * @type GLenum
 * @constant
 * @default 0x0D54
 */
WebGLRenderingContext.prototype.BLUE_BITS = 0x0D54;
/**
 * Constant ALPHA_BITS
 * @type GLenum
 * @constant
 * @default 0x0D55
 */
WebGLRenderingContext.prototype.ALPHA_BITS = 0x0D55;
/**
 * Constant DEPTH_BITS
 * @type GLenum
 * @constant
 * @default 0x0D56
 */
WebGLRenderingContext.prototype.DEPTH_BITS = 0x0D56;
/**
 * Constant STENCIL_BITS
 * @type GLenum
 * @constant
 * @default 0x0D57
 */
WebGLRenderingContext.prototype.STENCIL_BITS = 0x0D57;
/**
 * Constant POLYGON_OFFSET_UNITS
 * @type GLenum
 * @constant
 * @default 0x2A00
 */
WebGLRenderingContext.prototype.POLYGON_OFFSET_UNITS = 0x2A00;
/**
 * Constant POLYGON_OFFSET_FACTOR
 * @type GLenum
 * @constant
 * @default 0x8038
 */
WebGLRenderingContext.prototype.POLYGON_OFFSET_FACTOR = 0x8038;
/**
 * Constant TEXTURE_BINDING_2D
 * @type GLenum
 * @constant
 * @default 0x8069
 */
WebGLRenderingContext.prototype.TEXTURE_BINDING_2D = 0x8069;
/**
 * Constant SAMPLE_BUFFERS
 * @type GLenum
 * @constant
 * @default 0x80A8
 */
WebGLRenderingContext.prototype.SAMPLE_BUFFERS = 0x80A8;
/**
 * Constant SAMPLES
 * @type GLenum
 * @constant
 * @default 0x80A9
 */
WebGLRenderingContext.prototype.SAMPLES = 0x80A9;
/**
 * Constant SAMPLE_COVERAGE_VALUE
 * @type GLenum
 * @constant
 * @default 0x80AA
 */
WebGLRenderingContext.prototype.SAMPLE_COVERAGE_VALUE = 0x80AA;
/**
 * Constant SAMPLE_COVERAGE_INVERT
 * @type GLenum
 * @constant
 * @default 0x80AB
 */
WebGLRenderingContext.prototype.SAMPLE_COVERAGE_INVERT = 0x80AB;
/**
 * Constant NUM_COMPRESSED_TEXTURE_FORMATS
 * @type GLenum
 * @constant
 * @default 0x86A2
 */
WebGLRenderingContext.prototype.NUM_COMPRESSED_TEXTURE_FORMATS = 0x86A2;
/**
 * Constant COMPRESSED_TEXTURE_FORMATS
 * @type GLenum
 * @constant
 * @default 0x86A3
 */
WebGLRenderingContext.prototype.COMPRESSED_TEXTURE_FORMATS = 0x86A3;
/**
 * Constant DONT_CARE
 * @type GLenum
 * @constant
 * @default 0x1100
 */
WebGLRenderingContext.prototype.DONT_CARE = 0x1100;
/**
 * Constant FASTEST
 * @type GLenum
 * @constant
 * @default 0x1101
 */
WebGLRenderingContext.prototype.FASTEST = 0x1101;
/**
 * Constant NICEST
 * @type GLenum
 * @constant
 * @default 0x1102
 */
WebGLRenderingContext.prototype.NICEST = 0x1102;
/**
 * Constant GENERATE_MIPMAP_HINT
 * @type GLenum
 * @constant
 * @default 0x8192
 */
WebGLRenderingContext.prototype.GENERATE_MIPMAP_HINT = 0x8192;
/**
 * Constant BYTE
 * @type GLenum
 * @constant
 * @default 0x1400
 */
WebGLRenderingContext.prototype.BYTE = 0x1400;
/**
 * Constant UNSIGNED_BYTE
 * @type GLenum
 * @constant
 * @default 0x1401
 */
WebGLRenderingContext.prototype.UNSIGNED_BYTE = 0x1401;
/**
 * Constant SHORT
 * @type GLenum
 * @constant
 * @default 0x1402
 */
WebGLRenderingContext.prototype.SHORT = 0x1402;
/**
 * Constant UNSIGNED_SHORT
 * @type GLenum
 * @constant
 * @default 0x1403
 */
WebGLRenderingContext.prototype.UNSIGNED_SHORT = 0x1403;
/**
 * Constant INT
 * @type GLenum
 * @constant
 * @default 0x1404
 */
WebGLRenderingContext.prototype.INT = 0x1404;
/**
 * Constant UNSIGNED_INT
 * @type GLenum
 * @constant
 * @default 0x1405
 */
WebGLRenderingContext.prototype.UNSIGNED_INT = 0x1405;
/**
 * Constant FLOAT
 * @type GLenum
 * @constant
 * @default 0x1406
 */
WebGLRenderingContext.prototype.FLOAT = 0x1406;
/**
 * Constant DEPTH_COMPONENT
 * @type GLenum
 * @constant
 * @default 0x1902
 */
WebGLRenderingContext.prototype.DEPTH_COMPONENT = 0x1902;
/**
 * Constant ALPHA
 * @type GLenum
 * @constant
 * @default 0x1906
 */
WebGLRenderingContext.prototype.ALPHA = 0x1906;
/**
 * Constant RGB
 * @type GLenum
 * @constant
 * @default 0x1907
 */
WebGLRenderingContext.prototype.RGB = 0x1907;
/**
 * Constant RGBA
 * @type GLenum
 * @constant
 * @default 0x1908
 */
WebGLRenderingContext.prototype.RGBA = 0x1908;
/**
 * Constant LUMINANCE
 * @type GLenum
 * @constant
 * @default 0x1909
 */
WebGLRenderingContext.prototype.LUMINANCE = 0x1909;
/**
 * Constant LUMINANCE_ALPHA
 * @type GLenum
 * @constant
 * @default 0x190A
 */
WebGLRenderingContext.prototype.LUMINANCE_ALPHA = 0x190A;
/**
 * Constant UNSIGNED_SHORT_4_4_4_4
 * @type GLenum
 * @constant
 * @default 0x8033
 */
WebGLRenderingContext.prototype.UNSIGNED_SHORT_4_4_4_4 = 0x8033;
/**
 * Constant UNSIGNED_SHORT_5_5_5_1
 * @type GLenum
 * @constant
 * @default 0x8034
 */
WebGLRenderingContext.prototype.UNSIGNED_SHORT_5_5_5_1 = 0x8034;
/**
 * Constant UNSIGNED_SHORT_5_6_5
 * @type GLenum
 * @constant
 * @default 0x8363
 */
WebGLRenderingContext.prototype.UNSIGNED_SHORT_5_6_5 = 0x8363;
/**
 * Constant FRAGMENT_SHADER
 * @type GLenum
 * @constant
 * @default 0x8B30
 */
WebGLRenderingContext.prototype.FRAGMENT_SHADER = 0x8B30;
/**
 * Constant VERTEX_SHADER
 * @type GLenum
 * @constant
 * @default 0x8B31
 */
WebGLRenderingContext.prototype.VERTEX_SHADER = 0x8B31;
/**
 * Constant MAX_VERTEX_ATTRIBS
 * @type GLenum
 * @constant
 * @default 0x8869
 */
WebGLRenderingContext.prototype.MAX_VERTEX_ATTRIBS = 0x8869;
/**
 * Constant MAX_VERTEX_UNIFORM_VECTORS
 * @type GLenum
 * @constant
 * @default 0x8DFB
 */
WebGLRenderingContext.prototype.MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
/**
 * Constant MAX_VARYING_VECTORS
 * @type GLenum
 * @constant
 * @default 0x8DFC
 */
WebGLRenderingContext.prototype.MAX_VARYING_VECTORS = 0x8DFC;
/**
 * Constant MAX_COMBINED_TEXTURE_IMAGE_UNITS
 * @type GLenum
 * @constant
 * @default 0x8B4D
 */
WebGLRenderingContext.prototype.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
/**
 * Constant MAX_VERTEX_TEXTURE_IMAGE_UNITS
 * @type GLenum
 * @constant
 * @default 0x8B4C
 */
WebGLRenderingContext.prototype.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
/**
 * Constant MAX_TEXTURE_IMAGE_UNITS
 * @type GLenum
 * @constant
 * @default 0x8872
 */
WebGLRenderingContext.prototype.MAX_TEXTURE_IMAGE_UNITS = 0x8872;
/**
 * Constant MAX_FRAGMENT_UNIFORM_VECTORS
 * @type GLenum
 * @constant
 * @default 0x8DFD
 */
WebGLRenderingContext.prototype.MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;
/**
 * Constant SHADER_TYPE
 * @type GLenum
 * @constant
 * @default 0x8B4F
 */
WebGLRenderingContext.prototype.SHADER_TYPE = 0x8B4F;
/**
 * Constant DELETE_STATUS
 * @type GLenum
 * @constant
 * @default 0x8B80
 */
WebGLRenderingContext.prototype.DELETE_STATUS = 0x8B80;
/**
 * Constant LINK_STATUS
 * @type GLenum
 * @constant
 * @default 0x8B82
 */
WebGLRenderingContext.prototype.LINK_STATUS = 0x8B82;
/**
 * Constant VALIDATE_STATUS
 * @type GLenum
 * @constant
 * @default 0x8B83
 */
WebGLRenderingContext.prototype.VALIDATE_STATUS = 0x8B83;
/**
 * Constant ATTACHED_SHADERS
 * @type GLenum
 * @constant
 * @default 0x8B85
 */
WebGLRenderingContext.prototype.ATTACHED_SHADERS = 0x8B85;
/**
 * Constant ACTIVE_UNIFORMS
 * @type GLenum
 * @constant
 * @default 0x8B86
 */
WebGLRenderingContext.prototype.ACTIVE_UNIFORMS = 0x8B86;
/**
 * Constant ACTIVE_UNIFORM_MAX_LENGTH
 * @type GLenum
 * @constant
 * @default 0x8B87
 */
WebGLRenderingContext.prototype.ACTIVE_UNIFORM_MAX_LENGTH = 0x8B87;
/**
 * Constant ACTIVE_ATTRIBUTES
 * @type GLenum
 * @constant
 * @default 0x8B89
 */
WebGLRenderingContext.prototype.ACTIVE_ATTRIBUTES = 0x8B89;
/**
 * Constant ACTIVE_ATTRIBUTE_MAX_LENGTH
 * @type GLenum
 * @constant
 * @default 0x8B8A
 */
WebGLRenderingContext.prototype.ACTIVE_ATTRIBUTE_MAX_LENGTH = 0x8B8A;
/**
 * Constant SHADING_LANGUAGE_VERSION
 * @type GLenum
 * @constant
 * @default 0x8B8C
 */
WebGLRenderingContext.prototype.SHADING_LANGUAGE_VERSION = 0x8B8C;
/**
 * Constant CURRENT_PROGRAM
 * @type GLenum
 * @constant
 * @default 0x8B8D
 */
WebGLRenderingContext.prototype.CURRENT_PROGRAM = 0x8B8D;
/**
 * Constant NEVER
 * @type GLenum
 * @constant
 * @default 0x0200
 */
WebGLRenderingContext.prototype.NEVER = 0x0200;
/**
 * Constant LESS
 * @type GLenum
 * @constant
 * @default 0x0201
 */
WebGLRenderingContext.prototype.LESS = 0x0201;
/**
 * Constant EQUAL
 * @type GLenum
 * @constant
 * @default 0x0202
 */
WebGLRenderingContext.prototype.EQUAL = 0x0202;
/**
 * Constant LEQUAL
 * @type GLenum
 * @constant
 * @default 0x0203
 */
WebGLRenderingContext.prototype.LEQUAL = 0x0203;
/**
 * Constant GREATER
 * @type GLenum
 * @constant
 * @default 0x0204
 */
WebGLRenderingContext.prototype.GREATER = 0x0204;
/**
 * Constant NOTEQUAL
 * @type GLenum
 * @constant
 * @default 0x0205
 */
WebGLRenderingContext.prototype.NOTEQUAL = 0x0205;
/**
 * Constant GEQUAL
 * @type GLenum
 * @constant
 * @default 0x0206
 */
WebGLRenderingContext.prototype.GEQUAL = 0x0206;
/**
 * Constant ALWAYS
 * @type GLenum
 * @constant
 * @default 0x0207
 */
WebGLRenderingContext.prototype.ALWAYS = 0x0207;
/**
 * Constant KEEP
 * @type GLenum
 * @constant
 * @default 0x1E00
 */
WebGLRenderingContext.prototype.KEEP = 0x1E00;
/**
 * Constant REPLACE
 * @type GLenum
 * @constant
 * @default 0x1E01
 */
WebGLRenderingContext.prototype.REPLACE = 0x1E01;
/**
 * Constant INCR
 * @type GLenum
 * @constant
 * @default 0x1E02
 */
WebGLRenderingContext.prototype.INCR = 0x1E02;
/**
 * Constant DECR
 * @type GLenum
 * @constant
 * @default 0x1E03
 */
WebGLRenderingContext.prototype.DECR = 0x1E03;
/**
 * Constant INVERT
 * @type GLenum
 * @constant
 * @default 0x150A
 */
WebGLRenderingContext.prototype.INVERT = 0x150A;
/**
 * Constant INCR_WRAP
 * @type GLenum
 * @constant
 * @default 0x8507
 */
WebGLRenderingContext.prototype.INCR_WRAP = 0x8507;
/**
 * Constant DECR_WRAP
 * @type GLenum
 * @constant
 * @default 0x8508
 */
WebGLRenderingContext.prototype.DECR_WRAP = 0x8508;
/**
 * Constant VENDOR
 * @type GLenum
 * @constant
 * @default 0x1F00
 */
WebGLRenderingContext.prototype.VENDOR = 0x1F00;
/**
 * Constant RENDERER
 * @type GLenum
 * @constant
 * @default 0x1F01
 */
WebGLRenderingContext.prototype.RENDERER = 0x1F01;
/**
 * Constant VERSION
 * @type GLenum
 * @constant
 * @default 0x1F02
 */
WebGLRenderingContext.prototype.VERSION = 0x1F02;
/**
 * Constant EXTENSIONS
 * @type GLenum
 * @constant
 * @default 0x1F03
 */
WebGLRenderingContext.prototype.EXTENSIONS = 0x1F03;
/**
 * Constant NEAREST
 * @type GLenum
 * @constant
 * @default 0x2600
 */
WebGLRenderingContext.prototype.NEAREST = 0x2600;
/**
 * Constant LINEAR
 * @type GLenum
 * @constant
 * @default 0x2601
 */
WebGLRenderingContext.prototype.LINEAR = 0x2601;
/**
 * Constant NEAREST_MIPMAP_NEAREST
 * @type GLenum
 * @constant
 * @default 0x2700
 */
WebGLRenderingContext.prototype.NEAREST_MIPMAP_NEAREST = 0x2700;
/**
 * Constant LINEAR_MIPMAP_NEAREST
 * @type GLenum
 * @constant
 * @default 0x2701
 */
WebGLRenderingContext.prototype.LINEAR_MIPMAP_NEAREST = 0x2701;
/**
 * Constant NEAREST_MIPMAP_LINEAR
 * @type GLenum
 * @constant
 * @default 0x2702
 */
WebGLRenderingContext.prototype.NEAREST_MIPMAP_LINEAR = 0x2702;
/**
 * Constant LINEAR_MIPMAP_LINEAR
 * @type GLenum
 * @constant
 * @default 0x2703
 */
WebGLRenderingContext.prototype.LINEAR_MIPMAP_LINEAR = 0x2703;
/**
 * Constant TEXTURE_MAG_FILTER
 * @type GLenum
 * @constant
 * @default 0x2800
 */
WebGLRenderingContext.prototype.TEXTURE_MAG_FILTER = 0x2800;
/**
 * Constant TEXTURE_MIN_FILTER
 * @type GLenum
 * @constant
 * @default 0x2801
 */
WebGLRenderingContext.prototype.TEXTURE_MIN_FILTER = 0x2801;
/**
 * Constant TEXTURE_WRAP_S
 * @type GLenum
 * @constant
 * @default 0x2802
 */
WebGLRenderingContext.prototype.TEXTURE_WRAP_S = 0x2802;
/**
 * Constant TEXTURE_WRAP_T
 * @type GLenum
 * @constant
 * @default 0x2803
 */
WebGLRenderingContext.prototype.TEXTURE_WRAP_T = 0x2803;
/**
 * Constant TEXTURE
 * @type GLenum
 * @constant
 * @default 0x1702
 */
WebGLRenderingContext.prototype.TEXTURE = 0x1702;
/**
 * Constant TEXTURE_CUBE_MAP
 * @type GLenum
 * @constant
 * @default 0x8513
 */
WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP = 0x8513;
/**
 * Constant TEXTURE_BINDING_CUBE_MAP
 * @type GLenum
 * @constant
 * @default 0x8514
 */
WebGLRenderingContext.prototype.TEXTURE_BINDING_CUBE_MAP = 0x8514;
/**
 * Constant TEXTURE_CUBE_MAP_POSITIVE_X
 * @type GLenum
 * @constant
 * @default 0x8515
 */
WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
/**
 * Constant TEXTURE_CUBE_MAP_NEGATIVE_X
 * @type GLenum
 * @constant
 * @default 0x8516
 */
WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
/**
 * Constant TEXTURE_CUBE_MAP_POSITIVE_Y
 * @type GLenum
 * @constant
 * @default 0x8517
 */
WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
/**
 * Constant TEXTURE_CUBE_MAP_NEGATIVE_Y
 * @type GLenum
 * @constant
 * @default 0x8518
 */
WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
/**
 * Constant TEXTURE_CUBE_MAP_POSITIVE_Z
 * @type GLenum
 * @constant
 * @default 0x8519
 */
WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
/**
 * Constant TEXTURE_CUBE_MAP_NEGATIVE_Z
 * @type GLenum
 * @constant
 * @default 0x851A
 */
WebGLRenderingContext.prototype.TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
/**
 * Constant MAX_CUBE_MAP_TEXTURE_SIZE
 * @type GLenum
 * @constant
 * @default 0x851C
 */
WebGLRenderingContext.prototype.MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
/**
 * Constant TEXTURE0
 * @type GLenum
 * @constant
 * @default 0x84C0
 */
WebGLRenderingContext.prototype.TEXTURE0 = 0x84C0;
/**
 * Constant TEXTURE1
 * @type GLenum
 * @constant
 * @default 0x84C1
 */
WebGLRenderingContext.prototype.TEXTURE1 = 0x84C1;
/**
 * Constant TEXTURE2
 * @type GLenum
 * @constant
 * @default 0x84C2
 */
WebGLRenderingContext.prototype.TEXTURE2 = 0x84C2;
/**
 * Constant TEXTURE3
 * @type GLenum
 * @constant
 * @default 0x84C3
 */
WebGLRenderingContext.prototype.TEXTURE3 = 0x84C3;
/**
 * Constant TEXTURE4
 * @type GLenum
 * @constant
 * @default 0x84C4
 */
WebGLRenderingContext.prototype.TEXTURE4 = 0x84C4;
/**
 * Constant TEXTURE5
 * @type GLenum
 * @constant
 * @default 0x84C5
 */
WebGLRenderingContext.prototype.TEXTURE5 = 0x84C5;
/**
 * Constant TEXTURE6
 * @type GLenum
 * @constant
 * @default 0x84C6
 */
WebGLRenderingContext.prototype.TEXTURE6 = 0x84C6;
/**
 * Constant TEXTURE7
 * @type GLenum
 * @constant
 * @default 0x84C7
 */
WebGLRenderingContext.prototype.TEXTURE7 = 0x84C7;
/**
 * Constant TEXTURE8
 * @type GLenum
 * @constant
 * @default 0x84C8
 */
WebGLRenderingContext.prototype.TEXTURE8 = 0x84C8;
/**
 * Constant TEXTURE9
 * @type GLenum
 * @constant
 * @default 0x84C9
 */
WebGLRenderingContext.prototype.TEXTURE9 = 0x84C9;
/**
 * Constant TEXTURE10
 * @type GLenum
 * @constant
 * @default 0x84CA
 */
WebGLRenderingContext.prototype.TEXTURE10 = 0x84CA;
/**
 * Constant TEXTURE11
 * @type GLenum
 * @constant
 * @default 0x84CB
 */
WebGLRenderingContext.prototype.TEXTURE11 = 0x84CB;
/**
 * Constant TEXTURE12
 * @type GLenum
 * @constant
 * @default 0x84CC
 */
WebGLRenderingContext.prototype.TEXTURE12 = 0x84CC;
/**
 * Constant TEXTURE13
 * @type GLenum
 * @constant
 * @default 0x84CD
 */
WebGLRenderingContext.prototype.TEXTURE13 = 0x84CD;
/**
 * Constant TEXTURE14
 * @type GLenum
 * @constant
 * @default 0x84CE
 */
WebGLRenderingContext.prototype.TEXTURE14 = 0x84CE;
/**
 * Constant TEXTURE15
 * @type GLenum
 * @constant
 * @default 0x84CF
 */
WebGLRenderingContext.prototype.TEXTURE15 = 0x84CF;
/**
 * Constant TEXTURE16
 * @type GLenum
 * @constant
 * @default 0x84D0
 */
WebGLRenderingContext.prototype.TEXTURE16 = 0x84D0;
/**
 * Constant TEXTURE17
 * @type GLenum
 * @constant
 * @default 0x84D1
 */
WebGLRenderingContext.prototype.TEXTURE17 = 0x84D1;
/**
 * Constant TEXTURE18
 * @type GLenum
 * @constant
 * @default 0x84D2
 */
WebGLRenderingContext.prototype.TEXTURE18 = 0x84D2;
/**
 * Constant TEXTURE19
 * @type GLenum
 * @constant
 * @default 0x84D3
 */
WebGLRenderingContext.prototype.TEXTURE19 = 0x84D3;
/**
 * Constant TEXTURE20
 * @type GLenum
 * @constant
 * @default 0x84D4
 */
WebGLRenderingContext.prototype.TEXTURE20 = 0x84D4;
/**
 * Constant TEXTURE21
 * @type GLenum
 * @constant
 * @default 0x84D5
 */
WebGLRenderingContext.prototype.TEXTURE21 = 0x84D5;
/**
 * Constant TEXTURE22
 * @type GLenum
 * @constant
 * @default 0x84D6
 */
WebGLRenderingContext.prototype.TEXTURE22 = 0x84D6;
/**
 * Constant TEXTURE23
 * @type GLenum
 * @constant
 * @default 0x84D7
 */
WebGLRenderingContext.prototype.TEXTURE23 = 0x84D7;
/**
 * Constant TEXTURE24
 * @type GLenum
 * @constant
 * @default 0x84D8
 */
WebGLRenderingContext.prototype.TEXTURE24 = 0x84D8;
/**
 * Constant TEXTURE25
 * @type GLenum
 * @constant
 * @default 0x84D9
 */
WebGLRenderingContext.prototype.TEXTURE25 = 0x84D9;
/**
 * Constant TEXTURE26
 * @type GLenum
 * @constant
 * @default 0x84DA
 */
WebGLRenderingContext.prototype.TEXTURE26 = 0x84DA;
/**
 * Constant TEXTURE27
 * @type GLenum
 * @constant
 * @default 0x84DB
 */
WebGLRenderingContext.prototype.TEXTURE27 = 0x84DB;
/**
 * Constant TEXTURE28
 * @type GLenum
 * @constant
 * @default 0x84DC
 */
WebGLRenderingContext.prototype.TEXTURE28 = 0x84DC;
/**
 * Constant TEXTURE29
 * @type GLenum
 * @constant
 * @default 0x84DD
 */
WebGLRenderingContext.prototype.TEXTURE29 = 0x84DD;
/**
 * Constant TEXTURE30
 * @type GLenum
 * @constant
 * @default 0x84DE
 */
WebGLRenderingContext.prototype.TEXTURE30 = 0x84DE;
/**
 * Constant TEXTURE31
 * @type GLenum
 * @constant
 * @default 0x84DF
 */
WebGLRenderingContext.prototype.TEXTURE31 = 0x84DF;
/**
 * Constant ACTIVE_TEXTURE
 * @type GLenum
 * @constant
 * @default 0x84E0
 */
WebGLRenderingContext.prototype.ACTIVE_TEXTURE = 0x84E0;
/**
 * Constant REPEAT
 * @type GLenum
 * @constant
 * @default 0x2901
 */
WebGLRenderingContext.prototype.REPEAT = 0x2901;
/**
 * Constant CLAMP_TO_EDGE
 * @type GLenum
 * @constant
 * @default 0x812F
 */
WebGLRenderingContext.prototype.CLAMP_TO_EDGE = 0x812F;
/**
 * Constant MIRRORED_REPEAT
 * @type GLenum
 * @constant
 * @default 0x8370
 */
WebGLRenderingContext.prototype.MIRRORED_REPEAT = 0x8370;
/**
 * Constant FLOAT_VEC2
 * @type GLenum
 * @constant
 * @default 0x8B50
 */
WebGLRenderingContext.prototype.FLOAT_VEC2 = 0x8B50;
/**
 * Constant FLOAT_VEC3
 * @type GLenum
 * @constant
 * @default 0x8B51
 */
WebGLRenderingContext.prototype.FLOAT_VEC3 = 0x8B51;
/**
 * Constant FLOAT_VEC4
 * @type GLenum
 * @constant
 * @default 0x8B52
 */
WebGLRenderingContext.prototype.FLOAT_VEC4 = 0x8B52;
/**
 * Constant INT_VEC2
 * @type GLenum
 * @constant
 * @default 0x8B53
 */
WebGLRenderingContext.prototype.INT_VEC2 = 0x8B53;
/**
 * Constant INT_VEC3
 * @type GLenum
 * @constant
 * @default 0x8B54
 */
WebGLRenderingContext.prototype.INT_VEC3 = 0x8B54;
/**
 * Constant INT_VEC4
 * @type GLenum
 * @constant
 * @default 0x8B55
 */
WebGLRenderingContext.prototype.INT_VEC4 = 0x8B55;
/**
 * Constant BOOL
 * @type GLenum
 * @constant
 * @default 0x8B56
 */
WebGLRenderingContext.prototype.BOOL = 0x8B56;
/**
 * Constant BOOL_VEC2
 * @type GLenum
 * @constant
 * @default 0x8B57
 */
WebGLRenderingContext.prototype.BOOL_VEC2 = 0x8B57;
/**
 * Constant BOOL_VEC3
 * @type GLenum
 * @constant
 * @default 0x8B58
 */
WebGLRenderingContext.prototype.BOOL_VEC3 = 0x8B58;
/**
 * Constant BOOL_VEC4
 * @type GLenum
 * @constant
 * @default 0x8B59
 */
WebGLRenderingContext.prototype.BOOL_VEC4 = 0x8B59;
/**
 * Constant FLOAT_MAT2
 * @type GLenum
 * @constant
 * @default 0x8B5A
 */
WebGLRenderingContext.prototype.FLOAT_MAT2 = 0x8B5A;
/**
 * Constant FLOAT_MAT3
 * @type GLenum
 * @constant
 * @default 0x8B5B
 */
WebGLRenderingContext.prototype.FLOAT_MAT3 = 0x8B5B;
/**
 * Constant FLOAT_MAT4
 * @type GLenum
 * @constant
 * @default 0x8B5C
 */
WebGLRenderingContext.prototype.FLOAT_MAT4 = 0x8B5C;
/**
 * Constant SAMPLER_2D
 * @type GLenum
 * @constant
 * @default 0x8B5E
 */
WebGLRenderingContext.prototype.SAMPLER_2D = 0x8B5E;
/**
 * Constant SAMPLER_CUBE
 * @type GLenum
 * @constant
 * @default 0x8B60
 */
WebGLRenderingContext.prototype.SAMPLER_CUBE = 0x8B60;
/**
 * Constant VERTEX_ATTRIB_ARRAY_ENABLED
 * @type GLenum
 * @constant
 * @default 0x8622
 */
WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
/**
 * Constant VERTEX_ATTRIB_ARRAY_SIZE
 * @type GLenum
 * @constant
 * @default 0x8623
 */
WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
/**
 * Constant VERTEX_ATTRIB_ARRAY_STRIDE
 * @type GLenum
 * @constant
 * @default 0x8624
 */
WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
/**
 * Constant VERTEX_ATTRIB_ARRAY_TYPE
 * @type GLenum
 * @constant
 * @default 0x8625
 */
WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
/**
 * Constant VERTEX_ATTRIB_ARRAY_NORMALIZED
 * @type GLenum
 * @constant
 * @default 0x886A
 */
WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
/**
 * Constant VERTEX_ATTRIB_ARRAY_POINTER
 * @type GLenum
 * @constant
 * @default 0x8645
 */
WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
/**
 * Constant VERTEX_ATTRIB_ARRAY_BUFFER_BINDING
 * @type GLenum
 * @constant
 * @default 0x889F
 */
WebGLRenderingContext.prototype.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;
/**
 * Constant IMPLEMENTATION_COLOR_READ_TYPE
 * @type GLenum
 * @constant
 * @default 0x8B9A
 */
WebGLRenderingContext.prototype.IMPLEMENTATION_COLOR_READ_TYPE = 0x8B9A;
/**
 * Constant IMPLEMENTATION_COLOR_READ_FORMAT
 * @type GLenum
 * @constant
 * @default 0x8B9B
 */
WebGLRenderingContext.prototype.IMPLEMENTATION_COLOR_READ_FORMAT = 0x8B9B;
/**
 * Constant COMPILE_STATUS
 * @type GLenum
 * @constant
 * @default 0x8B81
 */
WebGLRenderingContext.prototype.COMPILE_STATUS = 0x8B81;
/**
 * Constant INFO_LOG_LENGTH
 * @type GLenum
 * @constant
 * @default 0x8B84
 */
WebGLRenderingContext.prototype.INFO_LOG_LENGTH = 0x8B84;
/**
 * Constant SHADER_SOURCE_LENGTH
 * @type GLenum
 * @constant
 * @default 0x8B88
 */
WebGLRenderingContext.prototype.SHADER_SOURCE_LENGTH = 0x8B88;
/**
 * Constant SHADER_COMPILER
 * @type GLenum
 * @constant
 * @default 0x8DFA
 */
WebGLRenderingContext.prototype.SHADER_COMPILER = 0x8DFA;
/**
 * Constant LOW_FLOAT
 * @type GLenum
 * @constant
 * @default 0x8DF0
 */
WebGLRenderingContext.prototype.LOW_FLOAT = 0x8DF0;
/**
 * Constant MEDIUM_FLOAT
 * @type GLenum
 * @constant
 * @default 0x8DF1
 */
WebGLRenderingContext.prototype.MEDIUM_FLOAT = 0x8DF1;
/**
 * Constant HIGH_FLOAT
 * @type GLenum
 * @constant
 * @default 0x8DF2
 */
WebGLRenderingContext.prototype.HIGH_FLOAT = 0x8DF2;
/**
 * Constant LOW_INT
 * @type GLenum
 * @constant
 * @default 0x8DF3
 */
WebGLRenderingContext.prototype.LOW_INT = 0x8DF3;
/**
 * Constant MEDIUM_INT
 * @type GLenum
 * @constant
 * @default 0x8DF4
 */
WebGLRenderingContext.prototype.MEDIUM_INT = 0x8DF4;
/**
 * Constant HIGH_INT
 * @type GLenum
 * @constant
 * @default 0x8DF5
 */
WebGLRenderingContext.prototype.HIGH_INT = 0x8DF5;
/**
 * Constant FRAMEBUFFER
 * @type GLenum
 * @constant
 * @default 0x8D40
 */
WebGLRenderingContext.prototype.FRAMEBUFFER = 0x8D40;
/**
 * Constant RENDERBUFFER
 * @type GLenum
 * @constant
 * @default 0x8D41
 */
WebGLRenderingContext.prototype.RENDERBUFFER = 0x8D41;
/**
 * Constant RGBA4
 * @type GLenum
 * @constant
 * @default 0x8056
 */
WebGLRenderingContext.prototype.RGBA4 = 0x8056;
/**
 * Constant RGB5_A1
 * @type GLenum
 * @constant
 * @default 0x8057
 */
WebGLRenderingContext.prototype.RGB5_A1 = 0x8057;
/**
 * Constant RGB565
 * @type GLenum
 * @constant
 * @default 0x8D62
 */
WebGLRenderingContext.prototype.RGB565 = 0x8D62;
/**
 * Constant DEPTH_COMPONENT16
 * @type GLenum
 * @constant
 * @default 0x81A5
 */
WebGLRenderingContext.prototype.DEPTH_COMPONENT16 = 0x81A5;
/**
 * Constant STENCIL_INDEX
 * @type GLenum
 * @constant
 * @default 0x1901
 */
WebGLRenderingContext.prototype.STENCIL_INDEX = 0x1901;
/**
 * Constant STENCIL_INDEX8
 * @type GLenum
 * @constant
 * @default 0x8D48
 */
WebGLRenderingContext.prototype.STENCIL_INDEX8 = 0x8D48;
/**
 * Constant RENDERBUFFER_WIDTH
 * @type GLenum
 * @constant
 * @default 0x8D42
 */
WebGLRenderingContext.prototype.RENDERBUFFER_WIDTH = 0x8D42;
/**
 * Constant RENDERBUFFER_HEIGHT
 * @type GLenum
 * @constant
 * @default 0x8D43
 */
WebGLRenderingContext.prototype.RENDERBUFFER_HEIGHT = 0x8D43;
/**
 * Constant RENDERBUFFER_INTERNAL_FORMAT
 * @type GLenum
 * @constant
 * @default 0x8D44
 */
WebGLRenderingContext.prototype.RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
/**
 * Constant RENDERBUFFER_RED_SIZE
 * @type GLenum
 * @constant
 * @default 0x8D50
 */
WebGLRenderingContext.prototype.RENDERBUFFER_RED_SIZE = 0x8D50;
/**
 * Constant RENDERBUFFER_GREEN_SIZE
 * @type GLenum
 * @constant
 * @default 0x8D51
 */
WebGLRenderingContext.prototype.RENDERBUFFER_GREEN_SIZE = 0x8D51;
/**
 * Constant RENDERBUFFER_BLUE_SIZE
 * @type GLenum
 * @constant
 * @default 0x8D52
 */
WebGLRenderingContext.prototype.RENDERBUFFER_BLUE_SIZE = 0x8D52;
/**
 * Constant RENDERBUFFER_ALPHA_SIZE
 * @type GLenum
 * @constant
 * @default 0x8D53
 */
WebGLRenderingContext.prototype.RENDERBUFFER_ALPHA_SIZE = 0x8D53;
/**
 * Constant RENDERBUFFER_DEPTH_SIZE
 * @type GLenum
 * @constant
 * @default 0x8D54
 */
WebGLRenderingContext.prototype.RENDERBUFFER_DEPTH_SIZE = 0x8D54;
/**
 * Constant RENDERBUFFER_STENCIL_SIZE
 * @type GLenum
 * @constant
 * @default 0x8D55
 */
WebGLRenderingContext.prototype.RENDERBUFFER_STENCIL_SIZE = 0x8D55;
/**
 * Constant FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE
 * @type GLenum
 * @constant
 * @default 0x8CD0
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
/**
 * Constant FRAMEBUFFER_ATTACHMENT_OBJECT_NAME
 * @type GLenum
 * @constant
 * @default 0x8CD1
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
/**
 * Constant FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL
 * @type GLenum
 * @constant
 * @default 0x8CD2
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
/**
 * Constant FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE
 * @type GLenum
 * @constant
 * @default 0x8CD3
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
/**
 * Constant COLOR_ATTACHMENT0
 * @type GLenum
 * @constant
 * @default 0x8CE0
 */
WebGLRenderingContext.prototype.COLOR_ATTACHMENT0 = 0x8CE0;
/**
 * Constant DEPTH_ATTACHMENT
 * @type GLenum
 * @constant
 * @default 0x8D00
 */
WebGLRenderingContext.prototype.DEPTH_ATTACHMENT = 0x8D00;
/**
 * Constant STENCIL_ATTACHMENT
 * @type GLenum
 * @constant
 * @default 0x8D20
 */
WebGLRenderingContext.prototype.STENCIL_ATTACHMENT = 0x8D20;
/**
 * Constant NONE
 * @type GLenum
 * @constant
 * @default 0
 */
WebGLRenderingContext.prototype.NONE = 0;
/**
 * Constant FRAMEBUFFER_COMPLETE
 * @type GLenum
 * @constant
 * @default 0x8CD5
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_COMPLETE = 0x8CD5;
/**
 * Constant FRAMEBUFFER_INCOMPLETE_ATTACHMENT
 * @type GLenum
 * @constant
 * @default 0x8CD6
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
/**
 * Constant FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT
 * @type GLenum
 * @constant
 * @default 0x8CD7
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
/**
 * Constant FRAMEBUFFER_INCOMPLETE_DIMENSIONS
 * @type GLenum
 * @constant
 * @default 0x8CD9
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
/**
 * Constant FRAMEBUFFER_UNSUPPORTED
 * @type GLenum
 * @constant
 * @default 0x8CDD
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
/**
 * Constant FRAMEBUFFER_BINDING
 * @type GLenum
 * @constant
 * @default 0x8CA6
 */
WebGLRenderingContext.prototype.FRAMEBUFFER_BINDING = 0x8CA6;
/**
 * Constant RENDERBUFFER_BINDING
 * @type GLenum
 * @constant
 * @default 0x8CA7
 */
WebGLRenderingContext.prototype.RENDERBUFFER_BINDING = 0x8CA7;
/**
 * Constant MAX_RENDERBUFFER_SIZE
 * @type GLenum
 * @constant
 * @default 0x84E8
 */
WebGLRenderingContext.prototype.MAX_RENDERBUFFER_SIZE = 0x84E8;
/**
 * Constant INVALID_FRAMEBUFFER_OPERATION
 * @type GLenum
 * @constant
 * @default 0x0506
 */
WebGLRenderingContext.prototype.INVALID_FRAMEBUFFER_OPERATION = 0x0506;
/**
 * Propery canvas
 * @type HTMLCanvasElement
 */
WebGLRenderingContext.prototype.canvas = new HTMLCanvasElement();
/**
 * Function sizeInBytes
 * @memberOf WebGLRenderingContext
 * @param {GLenum} type
 * @returns {long}
 */
WebGLRenderingContext.prototype.sizeInBytes = function(type){ return new long(); };
/**
 * Function getContextAttributes
 * @memberOf WebGLRenderingContext
 * @returns {WebGLContextAttributes}
 */
WebGLRenderingContext.prototype.getContextAttributes = function(){ return new WebGLContextAttributes(); };
/**
 * Function activeTexture
 * @memberOf WebGLRenderingContext
 * @param {GLenum} texture
 */
WebGLRenderingContext.prototype.activeTexture = function(texture){};
/**
 * Function attachShader
 * @memberOf WebGLRenderingContext
 * @param {WebGLProgram} program
 * @param {WebGLShader} shader
 */
WebGLRenderingContext.prototype.attachShader = function(program, shader){};
/**
 * Function bindAttribLocation
 * @memberOf WebGLRenderingContext
 * @param {WebGLProgram} program
 * @param {GLuint} index
 * @param {DOMString} name
 */
WebGLRenderingContext.prototype.bindAttribLocation = function(program, index, name){};
/**
 * Function bindBuffer
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {WebGLBuffer} buffer
 */
WebGLRenderingContext.prototype.bindBuffer = function(target, buffer){};
/**
 * Function bindFramebuffer
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {WebGLFramebuffer} framebuffer
 */
WebGLRenderingContext.prototype.bindFramebuffer = function(target, framebuffer){};
/**
 * Function bindRenderbuffer
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {WebGLRenderbuffer} renderbuffer
 */
WebGLRenderingContext.prototype.bindRenderbuffer = function(target, renderbuffer){};
/**
 * Function bindTexture
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {WebGLTexture} texture
 */
WebGLRenderingContext.prototype.bindTexture = function(target, texture){};
/**
 * Function blendColor
 * @memberOf WebGLRenderingContext
 * @param {GLclampf} red
 * @param {GLclampf} green
 * @param {GLclampf} blue
 * @param {GLclampf} alpha
 */
WebGLRenderingContext.prototype.blendColor = function(red, green, blue, alpha){};
/**
 * Function blendEquation
 * @memberOf WebGLRenderingContext
 * @param {GLenum} mode
 */
WebGLRenderingContext.prototype.blendEquation = function(mode){};
/**
 * Function blendEquationSeparate
 * @memberOf WebGLRenderingContext
 * @param {GLenum} modeRGB
 * @param {GLenum} modeAlpha
 */
WebGLRenderingContext.prototype.blendEquationSeparate = function(modeRGB, modeAlpha){};
/**
 * Function blendFunc
 * @memberOf WebGLRenderingContext
 * @param {GLenum} sfactor
 * @param {GLenum} dfactor
 */
WebGLRenderingContext.prototype.blendFunc = function(sfactor, dfactor){};
/**
 * Function blendFuncSeparate
 * @memberOf WebGLRenderingContext
 * @param {GLenum} srcRGB
 * @param {GLenum} dstRGB
 * @param {GLenum} srcAlpha
 * @param {GLenum} dstAlpha
 */
WebGLRenderingContext.prototype.blendFuncSeparate = function(srcRGB, dstRGB, srcAlpha, dstAlpha){};
/**
 * Function bufferData
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLsizei} size
 * @param {GLenum} usage
 */
WebGLRenderingContext.prototype.bufferData = function(target, size, usage){};
/**
 * Function bufferData
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {WebGLArray} data
 * @param {GLenum} usage
 */
WebGLRenderingContext.prototype.bufferData = function(target, data, usage){};
/**
 * Function bufferData
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {WebGLArrayBuffer} data
 * @param {GLenum} usage
 */
WebGLRenderingContext.prototype.bufferData = function(target, data, usage){};
/**
 * Function bufferSubData
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLsizeiptr} offset
 * @param {WebGLArray} data
 */
WebGLRenderingContext.prototype.bufferSubData = function(target, offset, data){};
/**
 * Function bufferSubData
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLsizeiptr} offset
 * @param {WebGLArrayBuffer} data
 */
WebGLRenderingContext.prototype.bufferSubData = function(target, offset, data){};
/**
 * Function checkFramebufferStatus
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @returns {GLenum}
 */
WebGLRenderingContext.prototype.checkFramebufferStatus = function(target){ return new GLenum(); };
/**
 * Function clear
 * @memberOf WebGLRenderingContext
 * @param {GLbitfield} mask
 */
WebGLRenderingContext.prototype.clear = function(mask){};
/**
 * Function clearColor
 * @memberOf WebGLRenderingContext
 * @param {GLclampf} red
 * @param {GLclampf} green
 * @param {GLclampf} blue
 * @param {GLclampf} alpha
 */
WebGLRenderingContext.prototype.clearColor = function(red, green, blue, alpha){};
/**
 * Function clearDepth
 * @memberOf WebGLRenderingContext
 * @param {GLclampf} depth
 */
WebGLRenderingContext.prototype.clearDepth = function(depth){};
/**
 * Function clearStencil
 * @memberOf WebGLRenderingContext
 * @param {GLint} s
 */
WebGLRenderingContext.prototype.clearStencil = function(s){};
/**
 * Function colorMask
 * @memberOf WebGLRenderingContext
 * @param {GLboolean} red
 * @param {GLboolean} green
 * @param {GLboolean} blue
 * @param {GLboolean} alpha
 */
WebGLRenderingContext.prototype.colorMask = function(red, green, blue, alpha){};
/**
 * Function compileShader
 * @memberOf WebGLRenderingContext
 * @param {WebGLShader} shader
 */
WebGLRenderingContext.prototype.compileShader = function(shader){};
/**
 * Function copyTexImage2D
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLint} level
 * @param {GLenum} internalformat
 * @param {GLint} x
 * @param {GLint} y
 * @param {GLsizei} width
 * @param {GLsizei} height
 * @param {GLint} border
 */
WebGLRenderingContext.prototype.copyTexImage2D = function(target, level, internalformat, x, y, width, height, border){};
/**
 * Function copyTexSubImage2D
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLint} level
 * @param {GLint} xoffset
 * @param {GLint} yoffset
 * @param {GLint} x
 * @param {GLint} y
 * @param {GLsizei} width
 * @param {GLsizei} height
 */
WebGLRenderingContext.prototype.copyTexSubImage2D = function(target, level, xoffset, yoffset, x, y, width, height){};
/**
 * Function createBuffer
 * @memberOf WebGLRenderingContext
 * @returns {WebGLBuffer}
 */
WebGLRenderingContext.prototype.createBuffer = function(){ return new WebGLBuffer(); };
/**
 * Function createFramebuffer
 * @memberOf WebGLRenderingContext
 * @returns {WebGLFramebuffer}
 */
WebGLRenderingContext.prototype.createFramebuffer = function(){ return new WebGLFramebuffer(); };
/**
 * Function createProgram
 * @memberOf WebGLRenderingContext
 * @returns {WebGLProgram}
 */
WebGLRenderingContext.prototype.createProgram = function(){ return new WebGLProgram(); };
/**
 * Function createRenderbuffer
 * @memberOf WebGLRenderingContext
 * @returns {WebGLRenderbuffer}
 */
WebGLRenderingContext.prototype.createRenderbuffer = function(){ return new WebGLRenderbuffer(); };
/**
 * Function createShader
 * @memberOf WebGLRenderingContext
 * @param {GLenum} type
 * @returns {WebGLShader}
 */
WebGLRenderingContext.prototype.createShader = function(type){ return new WebGLShader(); };
/**
 * Function createTexture
 * @memberOf WebGLRenderingContext
 * @returns {WebGLTexture}
 */
WebGLRenderingContext.prototype.createTexture = function(){ return new WebGLTexture(); };
/**
 * Function cullFace
 * @memberOf WebGLRenderingContext
 * @param {GLenum} mode
 */
WebGLRenderingContext.prototype.cullFace = function(mode){};
/**
 * Function deleteBuffer
 * @memberOf WebGLRenderingContext
 * @param {WebGLBuffer} buffer
 */
WebGLRenderingContext.prototype.deleteBuffer = function(buffer){};
/**
 * Function deleteFramebuffer
 * @memberOf WebGLRenderingContext
 * @param {WebGLFramebuffer} framebuffer
 */
WebGLRenderingContext.prototype.deleteFramebuffer = function(framebuffer){};
/**
 * Function deleteProgram
 * @memberOf WebGLRenderingContext
 * @param {WebGLProgram} program
 */
WebGLRenderingContext.prototype.deleteProgram = function(program){};
/**
 * Function deleteRenderbuffer
 * @memberOf WebGLRenderingContext
 * @param {WebGLRenderbuffer} renderbuffer
 */
WebGLRenderingContext.prototype.deleteRenderbuffer = function(renderbuffer){};
/**
 * Function deleteShader
 * @memberOf WebGLRenderingContext
 * @param {WebGLShader} shader
 */
WebGLRenderingContext.prototype.deleteShader = function(shader){};
/**
 * Function deleteTexture
 * @memberOf WebGLRenderingContext
 * @param {WebGLTexture} texture
 */
WebGLRenderingContext.prototype.deleteTexture = function(texture){};
/**
 * Function depthFunc
 * @memberOf WebGLRenderingContext
 * @param {GLenum} func
 */
WebGLRenderingContext.prototype.depthFunc = function(func){};
/**
 * Function depthMask
 * @memberOf WebGLRenderingContext
 * @param {GLboolean} flag
 */
WebGLRenderingContext.prototype.depthMask = function(flag){};
/**
 * Function depthRange
 * @memberOf WebGLRenderingContext
 * @param {GLclampf} zNear
 * @param {GLclampf} zFar
 */
WebGLRenderingContext.prototype.depthRange = function(zNear, zFar){};
/**
 * Function detachShader
 * @memberOf WebGLRenderingContext
 * @param {WebGLProgram} program
 * @param {WebGLShader} shader
 */
WebGLRenderingContext.prototype.detachShader = function(program, shader){};
/**
 * Function disable
 * @memberOf WebGLRenderingContext
 * @param {GLenum} cap
 */
WebGLRenderingContext.prototype.disable = function(cap){};
/**
 * Function disableVertexAttribArray
 * @memberOf WebGLRenderingContext
 * @param {GLuint} index
 */
WebGLRenderingContext.prototype.disableVertexAttribArray = function(index){};
/**
 * Function drawArrays
 * @memberOf WebGLRenderingContext
 * @param {GLenum} mode
 * @param {GLint} first
 * @param {GLsizei} count
 */
WebGLRenderingContext.prototype.drawArrays = function(mode, first, count){};
/**
 * Function drawElements
 * @memberOf WebGLRenderingContext
 * @param {GLenum} mode
 * @param {GLsizei} count
 * @param {GLenum} type
 * @param {GLsizeiptr} offset
 */
WebGLRenderingContext.prototype.drawElements = function(mode, count, type, offset){};
/**
 * Function enable
 * @memberOf WebGLRenderingContext
 * @param {GLenum} cap
 */
WebGLRenderingContext.prototype.enable = function(cap){};
/**
 * Function enableVertexAttribArray
 * @memberOf WebGLRenderingContext
 * @param {GLuint} index
 */
WebGLRenderingContext.prototype.enableVertexAttribArray = function(index){};
/**
 * Function finish
 * @memberOf WebGLRenderingContext
 */
WebGLRenderingContext.prototype.finish = function(){};
/**
 * Function flush
 * @memberOf WebGLRenderingContext
 */
WebGLRenderingContext.prototype.flush = function(){};
/**
 * Function framebufferRenderbuffer
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLenum} attachment
 * @param {GLenum} renderbuffertarget
 * @param {WebGLRenderbuffer} renderbuffer
 */
WebGLRenderingContext.prototype.framebufferRenderbuffer = function(target, attachment, renderbuffertarget, renderbuffer){};
/**
 * Function framebufferTexture2D
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLenum} attachment
 * @param {GLenum} textarget
 * @param {WebGLTexture} texture
 * @param {GLint} level
 */
WebGLRenderingContext.prototype.framebufferTexture2D = function(target, attachment, textarget, texture, level){};
/**
 * Function frontFace
 * @memberOf WebGLRenderingContext
 * @param {GLenum} mode
 */
WebGLRenderingContext.prototype.frontFace = function(mode){};
/**
 * Function generateMipmap
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 */
WebGLRenderingContext.prototype.generateMipmap = function(target){};
/**
 * Function getActiveAttrib
 * @memberOf WebGLRenderingContext
 * @param {GLuint} program
 * @param {GLuint} index
 * @returns {WebGLActiveInfo}
 */
WebGLRenderingContext.prototype.getActiveAttrib = function(program, index){ return new WebGLActiveInfo(); };
/**
 * Function getActiveUniform
 * @memberOf WebGLRenderingContext
 * @param {GLuint} program
 * @param {GLuint} index
 * @returns {WebGLActiveInfo}
 */
WebGLRenderingContext.prototype.getActiveUniform = function(program, index){ return new WebGLActiveInfo(); };
/**
 * Function getAttachedShaders
 * @memberOf WebGLRenderingContext
 * @param {GLuint} program
 * @returns {WebGLObjectArray}
 */
WebGLRenderingContext.prototype.getAttachedShaders = function(program){ return new WebGLObjectArray(); };
/**
 * Function getAttribLocation
 * @memberOf WebGLRenderingContext
 * @param {WebGLProgram} program
 * @param {DOMString} name
 * @returns {GLint}
 */
WebGLRenderingContext.prototype.getAttribLocation = function(program, name){ return new GLint(); };
/**
 * Function getParameter
 * @memberOf WebGLRenderingContext
 * @param {GLenum} pname
 * @returns {any}
 */
WebGLRenderingContext.prototype.getParameter = function(pname){ return new any(); };
/**
 * Function getBufferParameter
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLenum} pname
 * @returns {any}
 */
WebGLRenderingContext.prototype.getBufferParameter = function(target, pname){ return new any(); };
/**
 * Function getError
 * @memberOf WebGLRenderingContext
 * @returns {GLenum}
 */
WebGLRenderingContext.prototype.getError = function(){ return new GLenum(); };
/**
 * Function getFramebufferAttachmentParameter
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLenum} attachment
 * @param {GLenum} pname
 * @returns {any}
 */
WebGLRenderingContext.prototype.getFramebufferAttachmentParameter = function(target, attachment, pname){ return new any(); };
/**
 * Function getProgramParameter
 * @memberOf WebGLRenderingContext
 * @param {WebGLProgram} program
 * @param {GLenum} pname
 * @returns {any}
 */
WebGLRenderingContext.prototype.getProgramParameter = function(program, pname){ return new any(); };
/**
 * Function getProgramInfoLog
 * @memberOf WebGLRenderingContext
 * @param {WebGLProgram} program
 * @returns {DOMString}
 */
WebGLRenderingContext.prototype.getProgramInfoLog = function(program){ return new DOMString(); };
/**
 * Function getRenderbufferParameter
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLenum} pname
 * @returns {any}
 */
WebGLRenderingContext.prototype.getRenderbufferParameter = function(target, pname){ return new any(); };
/**
 * Function getShaderParameter
 * @memberOf WebGLRenderingContext
 * @param {WebGLShader} shader
 * @param {GLenum} pname
 * @returns {any}
 */
WebGLRenderingContext.prototype.getShaderParameter = function(shader, pname){ return new any(); };
/**
 * Function getShaderInfoLog
 * @memberOf WebGLRenderingContext
 * @param {WebGLShader} shader
 * @returns {DOMString}
 */
WebGLRenderingContext.prototype.getShaderInfoLog = function(shader){ return new DOMString(); };
/**
 * Function getShaderSource
 * @memberOf WebGLRenderingContext
 * @param {WebGLShader} shader
 * @returns {DOMString}
 */
WebGLRenderingContext.prototype.getShaderSource = function(shader){ return new DOMString(); };
/**
 * Function getString
 * @memberOf WebGLRenderingContext
 * @param {GLenum} name
 * @returns {DOMString}
 */
WebGLRenderingContext.prototype.getString = function(name){ return new DOMString(); };
/**
 * Function getTexParameter
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLenum} pname
 * @returns {any}
 */
WebGLRenderingContext.prototype.getTexParameter = function(target, pname){ return new any(); };
/**
 * Function getUniform
 * @memberOf WebGLRenderingContext
 * @param {WebGLProgram} program
 * @param {WebGLUniformLocation} location
 * @returns {any}
 */
WebGLRenderingContext.prototype.getUniform = function(program, location){ return new any(); };
/**
 * Function getUniformLocation
 * @memberOf WebGLRenderingContext
 * @param {WebGLProgram} program
 * @param {DOMString} name
 * @returns {WebGLUniformLocation}
 */
WebGLRenderingContext.prototype.getUniformLocation = function(program, name){ return new WebGLUniformLocation(); };
/**
 * Function getVertexAttrib
 * @memberOf WebGLRenderingContext
 * @param {GLuint} index
 * @param {GLenum} pname
 * @returns {any}
 */
WebGLRenderingContext.prototype.getVertexAttrib = function(index, pname){ return new any(); };
/**
 * Function getVertexAttribOffset
 * @memberOf WebGLRenderingContext
 * @param {GLuint} index
 * @param {GLenum} pname
 * @returns {GLsizeiptr}
 */
WebGLRenderingContext.prototype.getVertexAttribOffset = function(index, pname){ return new GLsizeiptr(); };
/**
 * Function hint
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLenum} mode
 */
WebGLRenderingContext.prototype.hint = function(target, mode){};
/**
 * Function isBuffer
 * @memberOf WebGLRenderingContext
 * @param {WebGLObject} buffer
 * @returns {GLboolean}
 */
WebGLRenderingContext.prototype.isBuffer = function(buffer){ return new GLboolean(); };
/**
 * Function isEnabled
 * @memberOf WebGLRenderingContext
 * @param {GLenum} cap
 * @returns {GLboolean}
 */
WebGLRenderingContext.prototype.isEnabled = function(cap){ return new GLboolean(); };
/**
 * Function isFramebuffer
 * @memberOf WebGLRenderingContext
 * @param {WebGLObject} framebuffer
 * @returns {GLboolean}
 */
WebGLRenderingContext.prototype.isFramebuffer = function(framebuffer){ return new GLboolean(); };
/**
 * Function isProgram
 * @memberOf WebGLRenderingContext
 * @param {WebGLObject} program
 * @returns {GLboolean}
 */
WebGLRenderingContext.prototype.isProgram = function(program){ return new GLboolean(); };
/**
 * Function isRenderbuffer
 * @memberOf WebGLRenderingContext
 * @param {WebGLObject} renderbuffer
 * @returns {GLboolean}
 */
WebGLRenderingContext.prototype.isRenderbuffer = function(renderbuffer){ return new GLboolean(); };
/**
 * Function isShader
 * @memberOf WebGLRenderingContext
 * @param {WebGLObject} shader
 * @returns {GLboolean}
 */
WebGLRenderingContext.prototype.isShader = function(shader){ return new GLboolean(); };
/**
 * Function isTexture
 * @memberOf WebGLRenderingContext
 * @param {WebGLObject} texture
 * @returns {GLboolean}
 */
WebGLRenderingContext.prototype.isTexture = function(texture){ return new GLboolean(); };
/**
 * Function lineWidth
 * @memberOf WebGLRenderingContext
 * @param {GLfloat} width
 */
WebGLRenderingContext.prototype.lineWidth = function(width){};
/**
 * Function linkProgram
 * @memberOf WebGLRenderingContext
 * @param {WebGLProgram} program
 */
WebGLRenderingContext.prototype.linkProgram = function(program){};
/**
 * Function pixelStorei
 * @memberOf WebGLRenderingContext
 * @param {GLenum} pname
 * @param {GLint} param
 */
WebGLRenderingContext.prototype.pixelStorei = function(pname, param){};
/**
 * Function polygonOffset
 * @memberOf WebGLRenderingContext
 * @param {GLfloat} factor
 * @param {GLfloat} units
 */
WebGLRenderingContext.prototype.polygonOffset = function(factor, units){};
/**
 * Function readPixels
 * @memberOf WebGLRenderingContext
 * @param {GLint} x
 * @param {GLint} y
 * @param {GLsizei} width
 * @param {GLsizei} height
 * @param {GLenum} format
 * @param {GLenum} type
 * @returns {WebGLArray}
 */
WebGLRenderingContext.prototype.readPixels = function(x, y, width, height, format, type){ return new WebGLArray(); };
/**
 * Function renderbufferStorage
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLenum} internalformat
 * @param {GLsizei} width
 * @param {GLsizei} height
 */
WebGLRenderingContext.prototype.renderbufferStorage = function(target, internalformat, width, height){};
/**
 * Function sampleCoverage
 * @memberOf WebGLRenderingContext
 * @param {GLclampf} value
 * @param {GLboolean} invert
 */
WebGLRenderingContext.prototype.sampleCoverage = function(value, invert){};
/**
 * Function scissor
 * @memberOf WebGLRenderingContext
 * @param {GLint} x
 * @param {GLint} y
 * @param {GLsizei} width
 * @param {GLsizei} height
 */
WebGLRenderingContext.prototype.scissor = function(x, y, width, height){};
/**
 * Function shaderSource
 * @memberOf WebGLRenderingContext
 * @param {WebGLShader} shader
 * @param {DOMString} source
 */
WebGLRenderingContext.prototype.shaderSource = function(shader, source){};
/**
 * Function stencilFunc
 * @memberOf WebGLRenderingContext
 * @param {GLenum} func
 * @param {GLint} ref
 * @param {GLuint} mask
 */
WebGLRenderingContext.prototype.stencilFunc = function(func, ref, mask){};
/**
 * Function stencilFuncSeparate
 * @memberOf WebGLRenderingContext
 * @param {GLenum} face
 * @param {GLenum} func
 * @param {GLint} ref
 * @param {GLuint} mask
 */
WebGLRenderingContext.prototype.stencilFuncSeparate = function(face, func, ref, mask){};
/**
 * Function stencilMask
 * @memberOf WebGLRenderingContext
 * @param {GLuint} mask
 */
WebGLRenderingContext.prototype.stencilMask = function(mask){};
/**
 * Function stencilMaskSeparate
 * @memberOf WebGLRenderingContext
 * @param {GLenum} face
 * @param {GLuint} mask
 */
WebGLRenderingContext.prototype.stencilMaskSeparate = function(face, mask){};
/**
 * Function stencilOp
 * @memberOf WebGLRenderingContext
 * @param {GLenum} fail
 * @param {GLenum} zfail
 * @param {GLenum} zpass
 */
WebGLRenderingContext.prototype.stencilOp = function(fail, zfail, zpass){};
/**
 * Function stencilOpSeparate
 * @memberOf WebGLRenderingContext
 * @param {GLenum} face
 * @param {GLenum} fail
 * @param {GLenum} zfail
 * @param {GLenum} zpass
 */
WebGLRenderingContext.prototype.stencilOpSeparate = function(face, fail, zfail, zpass){};
/**
 * Function texImage2D
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLint} level
 * @param {GLenum} internalformat
 * @param {GLsizei} width
 * @param {GLsizei} height
 * @param {GLint} border
 * @param {GLenum} format
 * @param {GLenum} type
 * @param {WebGLArray} pixels
 */
WebGLRenderingContext.prototype.texImage2D = function(target, level, internalformat, width, height, border, format, type, pixels){};
/**
 * Function texImage2D
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLint} level
 * @param {ImageData} pixels
 * @param {GLboolean} flipY
 * @param {GLboolean} asPremultipliedAlpha
 */
WebGLRenderingContext.prototype.texImage2D = function(target, level, pixels, flipY, asPremultipliedAlpha){};
/**
 * Function texImage2D
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLint} level
 * @param {HTMLImageElement} image
 * @param {GLboolean} flipY
 * @param {GLboolean} asPremultipliedAlpha
 */
WebGLRenderingContext.prototype.texImage2D = function(target, level, image, flipY, asPremultipliedAlpha){};
/**
 * Function texImage2D
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLint} level
 * @param {HTMLCanvasElement} image
 * @param {GLboolean} flipY
 * @param {GLboolean} asPremultipliedAlpha
 */
WebGLRenderingContext.prototype.texImage2D = function(target, level, image, flipY, asPremultipliedAlpha){};
/**
 * Function texImage2D
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLint} level
 * @param {HTMLVideoElement} image
 * @param {GLboolean} flipY
 * @param {GLboolean} asPremultipliedAlpha
 */
WebGLRenderingContext.prototype.texImage2D = function(target, level, image, flipY, asPremultipliedAlpha){};
/**
 * Function texParameterf
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLenum} pname
 * @param {GLfloat} param
 */
WebGLRenderingContext.prototype.texParameterf = function(target, pname, param){};
/**
 * Function texParameteri
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLenum} pname
 * @param {GLint} param
 */
WebGLRenderingContext.prototype.texParameteri = function(target, pname, param){};
/**
 * Function texSubImage2D
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLint} level
 * @param {GLint} xoffset
 * @param {GLint} yoffset
 * @param {GLsizei} width
 * @param {GLsizei} height
 * @param {GLenum} format
 * @param {GLenum} type
 * @param {WebGLArray} pixels
 */
WebGLRenderingContext.prototype.texSubImage2D = function(target, level, xoffset, yoffset, width, height, format, type, pixels){};
/**
 * Function texSubImage2D
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLint} level
 * @param {GLint} xoffset
 * @param {GLint} yoffset
 * @param {ImageData} pixels
 * @param {GLboolean} flipY
 * @param {GLboolean} asPremultipliedAlpha
 */
WebGLRenderingContext.prototype.texSubImage2D = function(target, level, xoffset, yoffset, pixels, flipY, asPremultipliedAlpha){};
/**
 * Function texSubImage2D
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLint} level
 * @param {GLint} xoffset
 * @param {GLint} yoffset
 * @param {HTMLImageElement} image
 * @param {GLboolean} flipY
 * @param {GLboolean} asPremultipliedAlpha
 */
WebGLRenderingContext.prototype.texSubImage2D = function(target, level, xoffset, yoffset, image, flipY, asPremultipliedAlpha){};
/**
 * Function texSubImage2D
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLint} level
 * @param {GLint} xoffset
 * @param {GLint} yoffset
 * @param {HTMLCanvasElement} image
 * @param {GLboolean} flipY
 * @param {GLboolean} asPremultipliedAlpha
 */
WebGLRenderingContext.prototype.texSubImage2D = function(target, level, xoffset, yoffset, image, flipY, asPremultipliedAlpha){};
/**
 * Function texSubImage2D
 * @memberOf WebGLRenderingContext
 * @param {GLenum} target
 * @param {GLint} level
 * @param {GLint} xoffset
 * @param {GLint} yoffset
 * @param {HTMLVideoElement} image
 * @param {GLboolean} flipY
 * @param {GLboolean} asPremultipliedAlpha
 */
WebGLRenderingContext.prototype.texSubImage2D = function(target, level, xoffset, yoffset, image, flipY, asPremultipliedAlpha){};
/**
 * Function uniform1f
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {GLfloat} x
 */
WebGLRenderingContext.prototype.uniform1f = function(location, x){};
/**
 * Function uniform1fv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {WebGLFloatArray} v
 */
WebGLRenderingContext.prototype.uniform1fv = function(location, v){};
/**
 * Function uniform1fv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {sequence<float>} v
 */
WebGLRenderingContext.prototype.uniform1fv = function(location, v){};
/**
 * Function uniform1i
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {GLint} x
 */
WebGLRenderingContext.prototype.uniform1i = function(location, x){};
/**
 * Function uniform1iv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {WebGLIntArray} v
 */
WebGLRenderingContext.prototype.uniform1iv = function(location, v){};
/**
 * Function uniform1iv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {sequence<long>} v
 */
WebGLRenderingContext.prototype.uniform1iv = function(location, v){};
/**
 * Function uniform2f
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {GLfloat} x
 * @param {GLfloat} y
 */
WebGLRenderingContext.prototype.uniform2f = function(location, x, y){};
/**
 * Function uniform2fv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {WebGLFloatArray} v
 */
WebGLRenderingContext.prototype.uniform2fv = function(location, v){};
/**
 * Function uniform2fv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {sequence<float>} v
 */
WebGLRenderingContext.prototype.uniform2fv = function(location, v){};
/**
 * Function uniform2i
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {GLint} x
 * @param {GLint} y
 */
WebGLRenderingContext.prototype.uniform2i = function(location, x, y){};
/**
 * Function uniform2iv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {WebGLIntArray} v
 */
WebGLRenderingContext.prototype.uniform2iv = function(location, v){};
/**
 * Function uniform2iv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {sequence<long>} v
 */
WebGLRenderingContext.prototype.uniform2iv = function(location, v){};
/**
 * Function uniform3f
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {GLfloat} x
 * @param {GLfloat} y
 * @param {GLfloat} z
 */
WebGLRenderingContext.prototype.uniform3f = function(location, x, y, z){};
/**
 * Function uniform3fv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {WebGLFloatArray} v
 */
WebGLRenderingContext.prototype.uniform3fv = function(location, v){};
/**
 * Function uniform3fv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {sequence<float>} v
 */
WebGLRenderingContext.prototype.uniform3fv = function(location, v){};
/**
 * Function uniform3i
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {GLint} x
 * @param {GLint} y
 * @param {GLint} z
 */
WebGLRenderingContext.prototype.uniform3i = function(location, x, y, z){};
/**
 * Function uniform3iv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {WebGLIntArray} v
 */
WebGLRenderingContext.prototype.uniform3iv = function(location, v){};
/**
 * Function uniform3iv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {sequence<long>} v
 */
WebGLRenderingContext.prototype.uniform3iv = function(location, v){};
/**
 * Function uniform4f
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {GLfloat} x
 * @param {GLfloat} y
 * @param {GLfloat} z
 * @param {GLfloat} w
 */
WebGLRenderingContext.prototype.uniform4f = function(location, x, y, z, w){};
/**
 * Function uniform4fv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {WebGLFloatArray} v
 */
WebGLRenderingContext.prototype.uniform4fv = function(location, v){};
/**
 * Function uniform4fv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {sequence<float>} v
 */
WebGLRenderingContext.prototype.uniform4fv = function(location, v){};
/**
 * Function uniform4i
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {GLint} x
 * @param {GLint} y
 * @param {GLint} z
 * @param {GLint} w
 */
WebGLRenderingContext.prototype.uniform4i = function(location, x, y, z, w){};
/**
 * Function uniform4iv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {WebGLIntArray} v
 */
WebGLRenderingContext.prototype.uniform4iv = function(location, v){};
/**
 * Function uniform4iv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {sequence<long>} v
 */
WebGLRenderingContext.prototype.uniform4iv = function(location, v){};
/**
 * Function uniformMatrix2fv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {GLboolean} transpose
 * @param {WebGLFloatArray} value
 */
WebGLRenderingContext.prototype.uniformMatrix2fv = function(location, transpose, value){};
/**
 * Function uniformMatrix2fv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {GLboolean} transpose
 * @param {sequence<float>} value
 */
WebGLRenderingContext.prototype.uniformMatrix2fv = function(location, transpose, value){};
/**
 * Function uniformMatrix3fv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {GLboolean} transpose
 * @param {WebGLFloatArray} value
 */
WebGLRenderingContext.prototype.uniformMatrix3fv = function(location, transpose, value){};
/**
 * Function uniformMatrix3fv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {GLboolean} transpose
 * @param {sequence<float>} value
 */
WebGLRenderingContext.prototype.uniformMatrix3fv = function(location, transpose, value){};
/**
 * Function uniformMatrix4fv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {GLboolean} transpose
 * @param {WebGLFloatArray} value
 */
WebGLRenderingContext.prototype.uniformMatrix4fv = function(location, transpose, value){};
/**
 * Function uniformMatrix4fv
 * @memberOf WebGLRenderingContext
 * @param {WebGLUniformLocation} location
 * @param {GLboolean} transpose
 * @param {sequence<float>} value
 */
WebGLRenderingContext.prototype.uniformMatrix4fv = function(location, transpose, value){};
/**
 * Function useProgram
 * @memberOf WebGLRenderingContext
 * @param {WebGLProgram} program
 */
WebGLRenderingContext.prototype.useProgram = function(program){};
/**
 * Function validateProgram
 * @memberOf WebGLRenderingContext
 * @param {WebGLProgram} program
 */
WebGLRenderingContext.prototype.validateProgram = function(program){};
/**
 * Function vertexAttrib1f
 * @memberOf WebGLRenderingContext
 * @param {GLuint} indx
 * @param {GLfloat} x
 */
WebGLRenderingContext.prototype.vertexAttrib1f = function(indx, x){};
/**
 * Function vertexAttrib1fv
 * @memberOf WebGLRenderingContext
 * @param {GLuint} indx
 * @param {WebGLFloatArray} values
 */
WebGLRenderingContext.prototype.vertexAttrib1fv = function(indx, values){};
/**
 * Function vertexAttrib1fv
 * @memberOf WebGLRenderingContext
 * @param {GLuint} indx
 * @param {sequence<float>} values
 */
WebGLRenderingContext.prototype.vertexAttrib1fv = function(indx, values){};
/**
 * Function vertexAttrib2f
 * @memberOf WebGLRenderingContext
 * @param {GLuint} indx
 * @param {GLfloat} x
 * @param {GLfloat} y
 */
WebGLRenderingContext.prototype.vertexAttrib2f = function(indx, x, y){};
/**
 * Function vertexAttrib2fv
 * @memberOf WebGLRenderingContext
 * @param {GLuint} indx
 * @param {WebGLFloatArray} values
 */
WebGLRenderingContext.prototype.vertexAttrib2fv = function(indx, values){};
/**
 * Function vertexAttrib2fv
 * @memberOf WebGLRenderingContext
 * @param {GLuint} indx
 * @param {sequence<float>} values
 */
WebGLRenderingContext.prototype.vertexAttrib2fv = function(indx, values){};
/**
 * Function vertexAttrib3f
 * @memberOf WebGLRenderingContext
 * @param {GLuint} indx
 * @param {GLfloat} x
 * @param {GLfloat} y
 * @param {GLfloat} z
 */
WebGLRenderingContext.prototype.vertexAttrib3f = function(indx, x, y, z){};
/**
 * Function vertexAttrib3fv
 * @memberOf WebGLRenderingContext
 * @param {GLuint} indx
 * @param {WebGLFloatArray} values
 */
WebGLRenderingContext.prototype.vertexAttrib3fv = function(indx, values){};
/**
 * Function vertexAttrib3fv
 * @memberOf WebGLRenderingContext
 * @param {GLuint} indx
 * @param {sequence<float>} values
 */
WebGLRenderingContext.prototype.vertexAttrib3fv = function(indx, values){};
/**
 * Function vertexAttrib4f
 * @memberOf WebGLRenderingContext
 * @param {GLuint} indx
 * @param {GLfloat} x
 * @param {GLfloat} y
 * @param {GLfloat} z
 * @param {GLfloat} w
 */
WebGLRenderingContext.prototype.vertexAttrib4f = function(indx, x, y, z, w){};
/**
 * Function vertexAttrib4fv
 * @memberOf WebGLRenderingContext
 * @param {GLuint} indx
 * @param {WebGLFloatArray} values
 */
WebGLRenderingContext.prototype.vertexAttrib4fv = function(indx, values){};
/**
 * Function vertexAttrib4fv
 * @memberOf WebGLRenderingContext
 * @param {GLuint} indx
 * @param {sequence<float>} values
 */
WebGLRenderingContext.prototype.vertexAttrib4fv = function(indx, values){};
/**
 * Function vertexAttribPointer
 * @memberOf WebGLRenderingContext
 * @param {GLuint} indx
 * @param {GLint} size
 * @param {GLenum} type
 * @param {GLboolean} normalized
 * @param {GLsizei} stride
 * @param {GLsizeiptr} offset
 */
WebGLRenderingContext.prototype.vertexAttribPointer = function(indx, size, type, normalized, stride, offset){};
/**
 * Function viewport
 * @memberOf WebGLRenderingContext
 * @param {GLint} x
 * @param {GLint} y
 * @param {GLsizei} width
 * @param {GLsizei} height
 */
WebGLRenderingContext.prototype.viewport = function(x, y, width, height){};

/**
 * Object WebGLResourceLostEvent
 * 
 * @description This event occurs when some system activity external to WebGL occurs which
 * causes one of more resources of the current context to be lost. The resource
 * attribute contains the resource that was lost, or null if all resources were
 * lost. The context attribute contains the WebGLRenderingContext for which the
 * resource was lost.
 * 
 * @constructor
 * @augments Event
 * @see Event
 * @see https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/doc/spec/WebGL-spec.html
 */
function WebGLResourceLostEvent(){};
WebGLResourceLostEvent.prototype = new Event();
/**
 * Propery resource
 * @type WebGLObject
 */
WebGLResourceLostEvent.prototype.resource = new WebGLObject();
/**
 * Propery context
 * @type WebGLRenderingContext
 */
WebGLResourceLostEvent.prototype.context = new WebGLRenderingContext();
/**
 * Function initWebGLResourceLostEvent
 * @memberOf WebGLResourceLostEvent
 * @param {DOMString} type
 * @param {boolean} canBubble
 * @param {boolean} cancelable
 * @param {WebGLObject} resource
 * @param {WebGLRenderingContext} context
 */
WebGLResourceLostEvent.prototype.initWebGLResourceLostEvent = function(type, canBubble, cancelable, resource, context){};
