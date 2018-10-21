/**
 * Created by wxchenwd on 2017/12/07.
 * 数据缓存
 * 将请求到的结果缓存到本地(localStorage/memory)
 * 缓存时效和token一致，token失效缓存即失效，缓存区分用户
 */
function Cache () {
  var __isStorage = window.sessionStorage ? true : false;//是否支持 localStorage本地存储
  var __storageCache = __isStorage ? window.sessionStorage : {}; //缓存数据结构
  var __memoryCache = {};//内存缓存
  var __token = "guest";
  // var __token = ($.cookie('authorization-token') ? $.cookie('authorization-token') : "guest").toUpperCase();
  var __firstKey = ["V+", __token].join('.') + '.';//缓存前缀

  function getFistKey () {
    // __token = "guest";
    // __token = ($.cookie('authorization-token') ? $.cookie('authorization-token') : "guest").toUpperCase();
    __firstKey = ["V+", __token].join('.') + '.';
    return __firstKey;
}
  // 初始化缓存，主要是清理上一个token的废弃缓存
  /*(function (oh, my, god) {
    if (__isStorage) {
        for (var c in __storageCache) {
            if (c.indexOf('V+') !== -1 && c.indexOf(__token) === -1) {//判断是否当前token的缓存 && 判断一下是否属于V+的缓存，以免误删其他程序的缓存数据
                delete __storageCache[c];//删除缓存数据
            }
        }
    }
    return (oh ? my : !god);
  })();*/
return {
    //设置缓存数据，key,value形式
    //options rekeys 可选配置Array需要排除重复引用的数据节点key
    //options storage 可选配置boolean是否使用localStorage本地缓存
    setCache: function (key, value, options) {
   /* if(web.cache) {
        var isStorage = __isStorage;//是否使用localStorage缓存,默认由浏览器是否支持决定
        var rekeys = ['parentNode'];//要排除的重复引用key
        if (options) {
            if (typeof options.storage !== 'undefined') {
                isStorage = options.storage;//设置是否使用localStorage缓存
            }
            if (typeof options.rekeys !== 'undefined') {
                rekeys = rekeys.concat(options.rekeys);//设置是否使用localStorage缓存
            }
        }
        if (key) {
            key = (getFistKey() + key).toUpperCase();
            //如果是Object 需要JSON转换字符串
            if (!isStorage) {//不使用localStorage
                __memoryCache[key] = value;
                return;
            } else if (typeof value === 'object' && isStorage) {//使用localStorage，需要转换的object对象
                value = JSON.stringify(value, function (k, v) {
                    if (rekeys && rekeys.indexOf(k) !== -1) {//排除重复引用，不然转换会报错,导致无法转换成功
                        return;
                    }
                    return v;
                });
            }
            delete __storageCache[key];
            __storageCache[key] = value;
        }
    }*/

      var isStorage = __isStorage; // 是否使用localStorage缓存,默认由浏览器是否支持决定
      var rekeys = ['parentNode']; // 要排除的重复引用key
      if (options) {
        if (typeof options.storage !== 'undefined') {
          isStorage = options.storage; // 设置是否使用localStorage缓存
        }
        if (typeof options.rekeys !== 'undefined') {
          rekeys = rekeys.concat(options.rekeys); // 设置是否使用localStorage缓存
        }
      }
      if (key) {
        key = (getFistKey() + key).toUpperCase();
        // 如果是Object 需要JSON转换字符串
        if (!isStorage) { // 不使用localStorage
          __memoryCache[key] = value;
          return;
        } else if (typeof value === 'object' && isStorage) { // 使用localStorage，需要转换的object对象
          value = JSON.stringify(value, function (k, v) {
            if (rekeys && rekeys.indexOf(k) !== -1) { // 排除重复引用，不然转换会报错,导致无法转换成功
              return;
            }
            return v;
          });
        }
        delete __storageCache[key];
        __storageCache[key] = value;
      }
    },
    // 获取缓存数据
    getCache: function (key) {//根据key获取缓存数据
       /* if (web.cache) {
            key = (getFistKey() + key).toUpperCase();
            if (__isStorage && __storageCache[key]) {
                try {
                    var data = __isStorage ? JSON.parse(__storageCache[key]) : __storageCache[key]
                    if(typeof data === 'number'){//如果是number类型，当做字符串处理
                        data = data.toString();
                    }
                    return data;
                } catch (e) {
                    return __storageCache[key];
                }
            } else if (__memoryCache[key]) {
                return __memoryCache[key];
            }
            return undefined;
        } else {
            return undefined;
        }*/
      key = (getFistKey() + key).toUpperCase();
      if (__isStorage && __storageCache[key]) {
        try {
          var data = __isStorage ? JSON.parse(__storageCache[key]) : __storageCache[key]
          if (typeof data === 'number') { // 如果是number类型，当做字符串处理
            data = data.toString();
          }
          return data;
        } catch (e) {
          return __storageCache[key];
        }
      } else if (__memoryCache[key]) {
        return __memoryCache[key];
      }
      return undefined;
    },
    // 清除V+平台所有的缓存
    clear: function () {
      if (__isStorage) {
        for (var c in __storageCache) {
          if (c.indexOf('V+') !== -1) {
            delete __storageCache[c];
          }
        }
      }
    },
    // 删除指定key缓存
    remove: function (key) {
      key = (getFistKey() + key).toUpperCase();
      delete __storageCache[key];
    }
  }
};
export default Cache();
