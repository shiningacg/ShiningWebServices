/**
 * @fileoverview gRPC-Web generated client stub for public
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var user_user_pb = require('./user/user_pb.js')

var file_file_v2_pb = require('./file/file.v2_pb.js')

var watch_watch_pb = require('./watch/watch_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.public = require('./public_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.public.PublicClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.public.PublicPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.LoginRequest,
 *   !proto.user.LoginResponse>}
 */
const methodDescriptor_Public_Login = new grpc.web.MethodDescriptor(
  '/public.Public/Login',
  grpc.web.MethodType.UNARY,
  user_user_pb.LoginRequest,
  user_user_pb.LoginResponse,
  /**
   * @param {!proto.user.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_user_pb.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.LoginRequest,
 *   !proto.user.LoginResponse>}
 */
const methodInfo_Public_Login = new grpc.web.AbstractClientBase.MethodInfo(
  user_user_pb.LoginResponse,
  /**
   * @param {!proto.user.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_user_pb.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.user.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/Login',
      request,
      metadata || {},
      methodDescriptor_Public_Login,
      callback);
};


/**
 * @param {!proto.user.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/Login',
      request,
      metadata || {},
      methodDescriptor_Public_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.LogoutRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Public_Logout = new grpc.web.MethodDescriptor(
  '/public.Public/Logout',
  grpc.web.MethodType.UNARY,
  user_user_pb.LogoutRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.user.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.LogoutRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Public_Logout = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.user.LogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.user.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/Logout',
      request,
      metadata || {},
      methodDescriptor_Public_Logout,
      callback);
};


/**
 * @param {!proto.user.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/Logout',
      request,
      metadata || {},
      methodDescriptor_Public_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.RegisterRequest,
 *   !proto.user.RegisterResponse>}
 */
const methodDescriptor_Public_Register = new grpc.web.MethodDescriptor(
  '/public.Public/Register',
  grpc.web.MethodType.UNARY,
  user_user_pb.RegisterRequest,
  user_user_pb.RegisterResponse,
  /**
   * @param {!proto.user.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_user_pb.RegisterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.RegisterRequest,
 *   !proto.user.RegisterResponse>}
 */
const methodInfo_Public_Register = new grpc.web.AbstractClientBase.MethodInfo(
  user_user_pb.RegisterResponse,
  /**
   * @param {!proto.user.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_user_pb.RegisterResponse.deserializeBinary
);


/**
 * @param {!proto.user.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.RegisterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.RegisterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.register =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/Register',
      request,
      metadata || {},
      methodDescriptor_Public_Register,
      callback);
};


/**
 * @param {!proto.user.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.RegisterResponse>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.register =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/Register',
      request,
      metadata || {},
      methodDescriptor_Public_Register);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.EditInfoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Public_EditInfo = new grpc.web.MethodDescriptor(
  '/public.Public/EditInfo',
  grpc.web.MethodType.UNARY,
  user_user_pb.EditInfoRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.user.EditInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.EditInfoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Public_EditInfo = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.user.EditInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.user.EditInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.editInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/EditInfo',
      request,
      metadata || {},
      methodDescriptor_Public_EditInfo,
      callback);
};


/**
 * @param {!proto.user.EditInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.editInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/EditInfo',
      request,
      metadata || {},
      methodDescriptor_Public_EditInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.user.GetInfoRequest,
 *   !proto.user.GetInfoResponse>}
 */
const methodDescriptor_Public_UserInfoPage = new grpc.web.MethodDescriptor(
  '/public.Public/UserInfoPage',
  grpc.web.MethodType.UNARY,
  user_user_pb.GetInfoRequest,
  user_user_pb.GetInfoResponse,
  /**
   * @param {!proto.user.GetInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_user_pb.GetInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.user.GetInfoRequest,
 *   !proto.user.GetInfoResponse>}
 */
const methodInfo_Public_UserInfoPage = new grpc.web.AbstractClientBase.MethodInfo(
  user_user_pb.GetInfoResponse,
  /**
   * @param {!proto.user.GetInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  user_user_pb.GetInfoResponse.deserializeBinary
);


/**
 * @param {!proto.user.GetInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.user.GetInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.user.GetInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.userInfoPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/UserInfoPage',
      request,
      metadata || {},
      methodDescriptor_Public_UserInfoPage,
      callback);
};


/**
 * @param {!proto.user.GetInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.user.GetInfoResponse>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.userInfoPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/UserInfoPage',
      request,
      metadata || {},
      methodDescriptor_Public_UserInfoPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.watch.CreateCollectionRequest,
 *   !proto.watch.CreateCollectionResponse>}
 */
const methodDescriptor_Public_CreateCollection = new grpc.web.MethodDescriptor(
  '/public.Public/CreateCollection',
  grpc.web.MethodType.UNARY,
  watch_watch_pb.CreateCollectionRequest,
  watch_watch_pb.CreateCollectionResponse,
  /**
   * @param {!proto.watch.CreateCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  watch_watch_pb.CreateCollectionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.watch.CreateCollectionRequest,
 *   !proto.watch.CreateCollectionResponse>}
 */
const methodInfo_Public_CreateCollection = new grpc.web.AbstractClientBase.MethodInfo(
  watch_watch_pb.CreateCollectionResponse,
  /**
   * @param {!proto.watch.CreateCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  watch_watch_pb.CreateCollectionResponse.deserializeBinary
);


/**
 * @param {!proto.watch.CreateCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.watch.CreateCollectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.watch.CreateCollectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.createCollection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/CreateCollection',
      request,
      metadata || {},
      methodDescriptor_Public_CreateCollection,
      callback);
};


/**
 * @param {!proto.watch.CreateCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.watch.CreateCollectionResponse>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.createCollection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/CreateCollection',
      request,
      metadata || {},
      methodDescriptor_Public_CreateCollection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.watch.CreateVideoRequest,
 *   !proto.watch.CreateVideoResponse>}
 */
const methodDescriptor_Public_CreateVideo = new grpc.web.MethodDescriptor(
  '/public.Public/CreateVideo',
  grpc.web.MethodType.UNARY,
  watch_watch_pb.CreateVideoRequest,
  watch_watch_pb.CreateVideoResponse,
  /**
   * @param {!proto.watch.CreateVideoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  watch_watch_pb.CreateVideoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.watch.CreateVideoRequest,
 *   !proto.watch.CreateVideoResponse>}
 */
const methodInfo_Public_CreateVideo = new grpc.web.AbstractClientBase.MethodInfo(
  watch_watch_pb.CreateVideoResponse,
  /**
   * @param {!proto.watch.CreateVideoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  watch_watch_pb.CreateVideoResponse.deserializeBinary
);


/**
 * @param {!proto.watch.CreateVideoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.watch.CreateVideoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.watch.CreateVideoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.createVideo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/CreateVideo',
      request,
      metadata || {},
      methodDescriptor_Public_CreateVideo,
      callback);
};


/**
 * @param {!proto.watch.CreateVideoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.watch.CreateVideoResponse>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.createVideo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/CreateVideo',
      request,
      metadata || {},
      methodDescriptor_Public_CreateVideo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.watch.WatchVideoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Public_WatchVideo = new grpc.web.MethodDescriptor(
  '/public.Public/WatchVideo',
  grpc.web.MethodType.UNARY,
  watch_watch_pb.WatchVideoRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.watch.WatchVideoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.watch.WatchVideoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Public_WatchVideo = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.watch.WatchVideoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.watch.WatchVideoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.watchVideo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/WatchVideo',
      request,
      metadata || {},
      methodDescriptor_Public_WatchVideo,
      callback);
};


/**
 * @param {!proto.watch.WatchVideoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.watchVideo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/WatchVideo',
      request,
      metadata || {},
      methodDescriptor_Public_WatchVideo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.watch.RemoveCollectionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Public_RemoveCollection = new grpc.web.MethodDescriptor(
  '/public.Public/RemoveCollection',
  grpc.web.MethodType.UNARY,
  watch_watch_pb.RemoveCollectionRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.watch.RemoveCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.watch.RemoveCollectionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Public_RemoveCollection = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.watch.RemoveCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.watch.RemoveCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.removeCollection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/RemoveCollection',
      request,
      metadata || {},
      methodDescriptor_Public_RemoveCollection,
      callback);
};


/**
 * @param {!proto.watch.RemoveCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.removeCollection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/RemoveCollection',
      request,
      metadata || {},
      methodDescriptor_Public_RemoveCollection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.watch.RemoveVideoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Public_RemoveVideo = new grpc.web.MethodDescriptor(
  '/public.Public/RemoveVideo',
  grpc.web.MethodType.UNARY,
  watch_watch_pb.RemoveVideoRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.watch.RemoveVideoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.watch.RemoveVideoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Public_RemoveVideo = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.watch.RemoveVideoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.watch.RemoveVideoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.removeVideo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/RemoveVideo',
      request,
      metadata || {},
      methodDescriptor_Public_RemoveVideo,
      callback);
};


/**
 * @param {!proto.watch.RemoveVideoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.removeVideo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/RemoveVideo',
      request,
      metadata || {},
      methodDescriptor_Public_RemoveVideo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.watch.EditCollectionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Public_EditCollection = new grpc.web.MethodDescriptor(
  '/public.Public/EditCollection',
  grpc.web.MethodType.UNARY,
  watch_watch_pb.EditCollectionRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.watch.EditCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.watch.EditCollectionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Public_EditCollection = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.watch.EditCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.watch.EditCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.editCollection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/EditCollection',
      request,
      metadata || {},
      methodDescriptor_Public_EditCollection,
      callback);
};


/**
 * @param {!proto.watch.EditCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.editCollection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/EditCollection',
      request,
      metadata || {},
      methodDescriptor_Public_EditCollection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.watch.RenameVideoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Public_RenameVideo = new grpc.web.MethodDescriptor(
  '/public.Public/RenameVideo',
  grpc.web.MethodType.UNARY,
  watch_watch_pb.RenameVideoRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.watch.RenameVideoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.watch.RenameVideoRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Public_RenameVideo = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.watch.RenameVideoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.watch.RenameVideoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.renameVideo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/RenameVideo',
      request,
      metadata || {},
      methodDescriptor_Public_RenameVideo,
      callback);
};


/**
 * @param {!proto.watch.RenameVideoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.renameVideo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/RenameVideo',
      request,
      metadata || {},
      methodDescriptor_Public_RenameVideo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.watch.ListInvolvedResponse>}
 */
const methodDescriptor_Public_ListInvolved = new grpc.web.MethodDescriptor(
  '/public.Public/ListInvolved',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  watch_watch_pb.ListInvolvedResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  watch_watch_pb.ListInvolvedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.watch.ListInvolvedResponse>}
 */
const methodInfo_Public_ListInvolved = new grpc.web.AbstractClientBase.MethodInfo(
  watch_watch_pb.ListInvolvedResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  watch_watch_pb.ListInvolvedResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.watch.ListInvolvedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.watch.ListInvolvedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.listInvolved =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/ListInvolved',
      request,
      metadata || {},
      methodDescriptor_Public_ListInvolved,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.watch.ListInvolvedResponse>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.listInvolved =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/ListInvolved',
      request,
      metadata || {},
      methodDescriptor_Public_ListInvolved);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.watch.InvolveRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Public_Involve = new grpc.web.MethodDescriptor(
  '/public.Public/Involve',
  grpc.web.MethodType.UNARY,
  watch_watch_pb.InvolveRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.watch.InvolveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.watch.InvolveRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Public_Involve = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.watch.InvolveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.watch.InvolveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.involve =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/Involve',
      request,
      metadata || {},
      methodDescriptor_Public_Involve,
      callback);
};


/**
 * @param {!proto.watch.InvolveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.involve =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/Involve',
      request,
      metadata || {},
      methodDescriptor_Public_Involve);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.watch.SearchCollectionRequest,
 *   !proto.watch.SearchCollectionResponse>}
 */
const methodDescriptor_Public_SearchPage = new grpc.web.MethodDescriptor(
  '/public.Public/SearchPage',
  grpc.web.MethodType.UNARY,
  watch_watch_pb.SearchCollectionRequest,
  watch_watch_pb.SearchCollectionResponse,
  /**
   * @param {!proto.watch.SearchCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  watch_watch_pb.SearchCollectionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.watch.SearchCollectionRequest,
 *   !proto.watch.SearchCollectionResponse>}
 */
const methodInfo_Public_SearchPage = new grpc.web.AbstractClientBase.MethodInfo(
  watch_watch_pb.SearchCollectionResponse,
  /**
   * @param {!proto.watch.SearchCollectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  watch_watch_pb.SearchCollectionResponse.deserializeBinary
);


/**
 * @param {!proto.watch.SearchCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.watch.SearchCollectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.watch.SearchCollectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.searchPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/SearchPage',
      request,
      metadata || {},
      methodDescriptor_Public_SearchPage,
      callback);
};


/**
 * @param {!proto.watch.SearchCollectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.watch.SearchCollectionResponse>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.searchPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/SearchPage',
      request,
      metadata || {},
      methodDescriptor_Public_SearchPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.public.CollectionPageRequest,
 *   !proto.public.CollectionPageResponse>}
 */
const methodDescriptor_Public_CollectionPage = new grpc.web.MethodDescriptor(
  '/public.Public/CollectionPage',
  grpc.web.MethodType.UNARY,
  proto.public.CollectionPageRequest,
  proto.public.CollectionPageResponse,
  /**
   * @param {!proto.public.CollectionPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.public.CollectionPageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.public.CollectionPageRequest,
 *   !proto.public.CollectionPageResponse>}
 */
const methodInfo_Public_CollectionPage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.public.CollectionPageResponse,
  /**
   * @param {!proto.public.CollectionPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.public.CollectionPageResponse.deserializeBinary
);


/**
 * @param {!proto.public.CollectionPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.public.CollectionPageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.public.CollectionPageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.collectionPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/CollectionPage',
      request,
      metadata || {},
      methodDescriptor_Public_CollectionPage,
      callback);
};


/**
 * @param {!proto.public.CollectionPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.public.CollectionPageResponse>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.collectionPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/CollectionPage',
      request,
      metadata || {},
      methodDescriptor_Public_CollectionPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.public.VideoPageRequest,
 *   !proto.public.VideoPageResponse>}
 */
const methodDescriptor_Public_VideoPage = new grpc.web.MethodDescriptor(
  '/public.Public/VideoPage',
  grpc.web.MethodType.UNARY,
  proto.public.VideoPageRequest,
  proto.public.VideoPageResponse,
  /**
   * @param {!proto.public.VideoPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.public.VideoPageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.public.VideoPageRequest,
 *   !proto.public.VideoPageResponse>}
 */
const methodInfo_Public_VideoPage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.public.VideoPageResponse,
  /**
   * @param {!proto.public.VideoPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.public.VideoPageResponse.deserializeBinary
);


/**
 * @param {!proto.public.VideoPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.public.VideoPageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.public.VideoPageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.videoPage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/VideoPage',
      request,
      metadata || {},
      methodDescriptor_Public_VideoPage,
      callback);
};


/**
 * @param {!proto.public.VideoPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.public.VideoPageResponse>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.videoPage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/VideoPage',
      request,
      metadata || {},
      methodDescriptor_Public_VideoPage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.file_v2.DownloadRequest,
 *   !proto.file_v2.DownloadResponse>}
 */
const methodDescriptor_Public_Download = new grpc.web.MethodDescriptor(
  '/public.Public/Download',
  grpc.web.MethodType.UNARY,
  file_file_v2_pb.DownloadRequest,
  file_file_v2_pb.DownloadResponse,
  /**
   * @param {!proto.file_v2.DownloadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  file_file_v2_pb.DownloadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_v2.DownloadRequest,
 *   !proto.file_v2.DownloadResponse>}
 */
const methodInfo_Public_Download = new grpc.web.AbstractClientBase.MethodInfo(
  file_file_v2_pb.DownloadResponse,
  /**
   * @param {!proto.file_v2.DownloadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  file_file_v2_pb.DownloadResponse.deserializeBinary
);


/**
 * @param {!proto.file_v2.DownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_v2.DownloadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_v2.DownloadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.download =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/Download',
      request,
      metadata || {},
      methodDescriptor_Public_Download,
      callback);
};


/**
 * @param {!proto.file_v2.DownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_v2.DownloadResponse>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.download =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/Download',
      request,
      metadata || {},
      methodDescriptor_Public_Download);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.file_v2.UploadRequest,
 *   !proto.file_v2.UploadResponse>}
 */
const methodDescriptor_Public_Upload = new grpc.web.MethodDescriptor(
  '/public.Public/Upload',
  grpc.web.MethodType.UNARY,
  file_file_v2_pb.UploadRequest,
  file_file_v2_pb.UploadResponse,
  /**
   * @param {!proto.file_v2.UploadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  file_file_v2_pb.UploadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_v2.UploadRequest,
 *   !proto.file_v2.UploadResponse>}
 */
const methodInfo_Public_Upload = new grpc.web.AbstractClientBase.MethodInfo(
  file_file_v2_pb.UploadResponse,
  /**
   * @param {!proto.file_v2.UploadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  file_file_v2_pb.UploadResponse.deserializeBinary
);


/**
 * @param {!proto.file_v2.UploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_v2.UploadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_v2.UploadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.upload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/Upload',
      request,
      metadata || {},
      methodDescriptor_Public_Upload,
      callback);
};


/**
 * @param {!proto.file_v2.UploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_v2.UploadResponse>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.upload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/Upload',
      request,
      metadata || {},
      methodDescriptor_Public_Upload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.file_v2.FileRequest,
 *   !proto.file_v2.FileInfo>}
 */
const methodDescriptor_Public_File = new grpc.web.MethodDescriptor(
  '/public.Public/File',
  grpc.web.MethodType.UNARY,
  file_file_v2_pb.FileRequest,
  file_file_v2_pb.FileInfo,
  /**
   * @param {!proto.file_v2.FileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  file_file_v2_pb.FileInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.file_v2.FileRequest,
 *   !proto.file_v2.FileInfo>}
 */
const methodInfo_Public_File = new grpc.web.AbstractClientBase.MethodInfo(
  file_file_v2_pb.FileInfo,
  /**
   * @param {!proto.file_v2.FileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  file_file_v2_pb.FileInfo.deserializeBinary
);


/**
 * @param {!proto.file_v2.FileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.file_v2.FileInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.file_v2.FileInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.public.PublicClient.prototype.file =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/public.Public/File',
      request,
      metadata || {},
      methodDescriptor_Public_File,
      callback);
};


/**
 * @param {!proto.file_v2.FileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.file_v2.FileInfo>}
 *     Promise that resolves to the response
 */
proto.public.PublicPromiseClient.prototype.file =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/public.Public/File',
      request,
      metadata || {},
      methodDescriptor_Public_File);
};


module.exports = proto.public;

