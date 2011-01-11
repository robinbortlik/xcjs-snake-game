var XC, XCAction, XCButtonNode, XCCallFuncAction, XCColor, XCDelayAction, XCEvent, XCIntervalAction, XCKeyDownEvent, XCKeyUpEvent, XCMoveAction, XCMoveByAction, XCMoveToAction, XCNode, XCRotateAction, XCRotateByAction, XCRotateToAction, XCScaleAction, XCScaleByAction, XCScaleToAction, XCScene, XCSequenceAction, XCSpriteNode, XCTapDownEvent, XCTapMovedEvent, XCTapUpEvent, XCTextNode;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
XCColor = function() {
  function XCColor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  return XCColor;
}();
XCNode = function() {
  function XCNode() {
    this._visible = true;
    this._x = 0;
    this._y = 0;
    this._layer = 0;
    this._scaleX = 1.0;
    this._scaleY = 1.0;
    this._rotation = 0.0;
    this._opacity = 1.0;
    this._anchorX = 0;
    this._anchorY = 0;
    this._parent = null;
    this._color = new XCColor(0xFF, 0xFF, 0xFF);
    this._actions = [];
    this.setAnchorX(0.5);
    this.setAnchorY(0.5);
  }
  XCNode.prototype.parent = function() {
    return this._parent;
  };
  XCNode.prototype.setParent = function(scene) {
    return this._parent = scene;
  };
  XCNode.prototype.open = function(scene) {
    this.setParent(scene);
    return this.show();
  };
  XCNode.prototype.close = function() {
    this.setParent(null);
    return this.hide();
  };
  XCNode.prototype.width = function() {
    return _xcNodeWidth(this);
  };
  XCNode.prototype.height = function() {
    return _xcNodeHeight(this);
  };
  XCNode.prototype.rect = function() {
    return {
      x: this.X() - (this.anchorX() * this.width()),
      y: this.Y() - (this.anchorY() * this.height()),
      w: this.width(),
      h: this.height()
    };
  };
  XCNode.prototype.moveBy = function(xOffset, yOffset) {
    this.setX(this.X() + xOffset);
    return this.setY(this.Y() + yOffset);
  };
  XCNode.prototype.moveTo = function(xPosition, yPosition) {
    this.setX(xPosition);
    return this.setY(yPosition);
  };
  XCNode.prototype.X = function() {
    return _xcNodeX(this);
  };
  XCNode.prototype.Y = function() {
    return _xcNodeY(this);
  };
  XCNode.prototype.setX = function(newX) {
    return _xcNodeSetX(this, newX);
  };
  XCNode.prototype.setY = function(newY) {
    return _xcNodeSetY(this, newY);
  };
  XCNode.prototype.layer = function() {
    return _xcNodeLayer(this);
  };
  XCNode.prototype.setLayer = function(newLayer) {
    return _xcNodeSetLayer(this, newLayer);
  };
  XCNode.prototype.color = function() {
    return _xcNodeColor(this);
  };
  XCNode.prototype.setColor = function(newColor) {
    return _xcNodeSetColor(this, newColor);
  };
  XCNode.prototype.scaleXBy = function(factor) {
    return this.setScaleX(this.scaleX() * factor);
  };
  XCNode.prototype.scaleXTo = function(newScale) {
    return this.setScaleX(newScale);
  };
  XCNode.prototype.setScaleX = function(newScaleX) {
    return _xcNodeSetScaleX(this, newScaleX);
  };
  XCNode.prototype.scaleYBy = function(factor) {
    return this.setScaleY(this.scaleY() * factor);
  };
  XCNode.prototype.scaleYTo = function(newScale) {
    return this.setScaleY(newScale);
  };
  XCNode.prototype.setScaleY = function(newScaleY) {
    return _xcNodeSetScaleY(this, newScaleY);
  };
  XCNode.prototype.scaleBy = function(factor) {
    this.setScaleX(this.scaleX() * factor);
    return this.setScaleY(this.scaleY() * factor);
  };
  XCNode.prototype.scaleTo = function(newScale) {
    this.setScaleX(newScale);
    return this.setScaleY(newScale);
  };
  XCNode.prototype.scaleX = function() {
    return _xcNodeScaleX(this);
  };
  XCNode.prototype.scaleY = function() {
    return _xcNodeScaleY(this);
  };
  XCNode.prototype.rotateBy = function(offset) {
    return this.setRotation(this.rotation() + offset);
  };
  XCNode.prototype.rotateTo = function(newRotation) {
    return this.setRotation(newRotation);
  };
  XCNode.prototype.rotation = function() {
    return _xcNodeRotation(this);
  };
  XCNode.prototype.setRotation = function(newRotation) {
    return _xcNodeSetRotation(this, newRotation);
  };
  XCNode.prototype.fadeTo = function(newOpacity) {
    return this.setOpacity(newOpacity);
  };
  XCNode.prototype.opacity = function() {
    return _xcNodeOpacity(this);
  };
  XCNode.prototype.setOpacity = function(newOpacity) {
    return _xcNodeSetOpacity(this, newOpacity);
  };
  XCNode.prototype.anchorX = function() {
    return _xcNodeAnchorX(this);
  };
  XCNode.prototype.anchorY = function() {
    return _xcNodeAnchorY(this);
  };
  XCNode.prototype.setAnchorX = function(newAnchorX) {
    return _xcNodeSetAnchorX(this, newAnchorX);
  };
  XCNode.prototype.setAnchorY = function(newAnchorY) {
    return _xcNodeSetAnchorY(this, newAnchorY);
  };
  XCNode.prototype.visible = function() {
    return _xcNodeVisible(this);
  };
  XCNode.prototype.hide = function() {
    return _xcNodeSetVisible(this, false);
  };
  XCNode.prototype.show = function() {
    return _xcNodeSetVisible(this, true);
  };
  XCNode.prototype.actions = function() {
    return this._actions;
  };
  XCNode.prototype.tick = function(dt) {
    var action, _i, _len, _ref, _results;
    _ref = this.actions();
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      action = _ref[_i];
      _results.push(!action.tick(dt) ? this.removeAction(action) : void 0);
    }
    return _results;
  };
  XCNode.prototype.runAction = function(action) {
    if (this._actions.indexOf(action) === -1 && action.owner === null) {
      action.setOwner(this);
      return this._actions.push(action);
    } else {
      throw {
        name: "RunDuplicateActionError",
        message: "Tried to add action " + action + " to " + this + " twice"
      };
    }
  };
  XCNode.prototype.removeAction = function(action) {
    var pos;
    pos = this._actions.indexOf(action);
    if (pos !== -1) {
      return this._actions = this._actions.slice(0, pos).concat(this._actions.slice(pos + 1, this._actions.length));
    } else {
      throw {
        name: "RemoveActionError",
        message: "Tried to remove action " + action.name + " when it was not added"
      };
    }
  };
  return XCNode;
}();
XCTextNode = function() {
  function XCTextNode(_text, fontName, fontSize) {
    this._text = _text;
    this.fontName = fontName;
    this.fontSize = fontSize;
    this.drawable = true;
    this.sprite = _xcLoadText(this);
    this.font = this.fontSize + "pt " + this.fontName;
    XCTextNode.__super__.constructor.call(this);
  }
  __extends(XCTextNode, XCNode);
  XCTextNode.prototype.width = function() {
    return _xcTextNodeWidth(this);
  };
  XCTextNode.prototype.height = function() {
    return _xcTextNodeHeight(this);
  };
  XCTextNode.prototype.text = function() {
    return _xcTextNodeText(this);
  };
  XCTextNode.prototype.setText = function(newText) {
    return _xcTextSetText(this, newText);
  };
  XCTextNode.prototype.draw = function() {
    return _xcTextDraw(this);
  };
  return XCTextNode;
}();
XCSpriteNode = function() {
  function XCSpriteNode(imageName) {
    this.drawable = true;
    this.sprite = _xcLoadImage(imageName);
    XCSpriteNode.__super__.constructor.call(this);
    this._width = _xcImageWidth(this);
    this._height = _xcImageHeight(this);
    this.frame = 0;
  }
  __extends(XCSpriteNode, XCNode);
  XCSpriteNode.prototype.draw = function() {
    return _xcSpriteDraw(this);
  };
  return XCSpriteNode;
}();
XCAction = function() {
  function XCAction(name) {
    this.name = name;
    this.owner = null;
  }
  XCAction.prototype.tick = function(dt) {
    return false;
  };
  XCAction.prototype.setOwner = function(owner) {
    return this.owner = owner;
  };
  return XCAction;
}();
XCSequenceAction = function() {
  function XCSequenceAction(actions) {
    this.actions = actions;
    XCSequenceAction.__super__.constructor.call(this, "XCSequenceAction");
  }
  __extends(XCSequenceAction, XCAction);
  XCSequenceAction.prototype.tick = function(dt) {
    var currentAction;
    if (this.actions.length === 0) {
      return false;
    }
    currentAction = this.actions[0];
    if (!currentAction.tick(dt)) {
      this.actions = this.actions.slice(1, this.actions.length + 1);
    }
    return true;
  };
  XCSequenceAction.prototype.setOwner = function(owner) {
    var action, _i, _len, _ref, _results;
    XCSequenceAction.__super__.setOwner.call(this, owner);
    _ref = this.actions;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      action = _ref[_i];
      _results.push(action.setOwner(this.owner));
    }
    return _results;
  };
  return XCSequenceAction;
}();
XCScene = function() {
  function XCScene(name) {
    this.name = name;
    this._paused = false;
    this._children = [];
    this._scheduledFunctions = [];
  }
  XCScene.prototype.pause = function() {
    return this._paused = true;
  };
  XCScene.prototype.paused = function() {
    return this._paused;
  };
  XCScene.prototype.resume = function() {
    return this._paused = false;
  };
  XCScene.prototype.close = function() {};
  XCScene.prototype.tick = function(dt) {
    var child, scheduled, _i, _j, _len, _len2, _ref, _ref2, _results;
    _ref = this.children();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      child.tick(dt);
    }
    _ref2 = this._scheduledFunctions;
    _results = [];
    for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
      scheduled = _ref2[_j];
      scheduled.et += dt;
      _results.push(scheduled.et >= scheduled.interval ? (scheduled["function"](scheduled.et), scheduled.et = 0) : void 0);
    }
    return _results;
  };
  XCScene.prototype.addChild = function(child) {
    if (child.parent() !== null) {
      throw {
        name: 'DuplicateChildError',
        message: 'Node already a child of another scene'
      };
    }
    if (this._children.indexOf(child) === -1) {
      this._children.push(child);
      return child.open();
    } else {
      throw {
        name: 'DuplicateChildError',
        message: 'Can\'t add the same child twice'
      };
    }
  };
  XCScene.prototype.removeChild = function(child) {
    var pos;
    pos = this._children.indexOf(child);
    if (pos !== -1) {
      this._children = this._children.slice(0, pos).concat(this._children.slice(pos + 1, this._children.length));
      return child.close();
    } else {
      throw {
        name: 'NodeNotChildError',
        message: 'Can\'t remove a node that is not a child'
      };
    }
  };
  XCScene.prototype.children = function() {
    return this._children;
  };
  XCScene.prototype.scheduledFunctions = function() {
    return this._scheduledFunctions;
  };
  XCScene.prototype.schedule = function(fn, interval) {
    interval != null ? interval : interval = 0;
    return this.scheduledFunctions().push({
      "function": fn,
      interval: interval,
      et: 0
    });
  };
  XCScene.prototype.unschedule = function(fn) {
    var fnObject, i, scheduled, _i, _len, _ref;
    fnObject = null;
    _ref = this.scheduledFunctions();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      scheduled = _ref[_i];
      if (scheduled["function"] === fn) {
        fnObject = scheduled;
        break;
      }
    }
    i = this.scheduledFunctions().indexOf(fnObject);
    if (i !== -1) {
      return this._scheduledFunctions = this._scheduledFunctions.slice(0, i).concat(this._scheduledFunctions.slice(i + 1, this.scheduledFunctions.length - 1 + 1));
    } else {
      ;
    }
  };
  return XCScene;
}();
XCIntervalAction = function() {
  function XCIntervalAction(duration, name) {
    this.duration = duration;
    XCIntervalAction.__super__.constructor.call(this, name);
  }
  __extends(XCIntervalAction, XCAction);
  XCIntervalAction.prototype.tick = function(dt) {
    this.duration -= dt;
    return this.duration > 0;
  };
  return XCIntervalAction;
}();
XCScaleAction = function() {
  function XCScaleAction(duration, name) {
    XCScaleAction.__super__.constructor.call(this, duration, name);
    this.etX = 0;
    this.etY = 0;
    this.firstTick = true;
  }
  __extends(XCScaleAction, XCIntervalAction);
  XCScaleAction.prototype.tick = function(dt) {
    var newScaleX, newScaleY;
    this.etX += dt;
    this.etY += dt;
    newScaleX = this.etX * this.stepScaleX;
    newScaleY = this.etY * this.stepScaleY;
    if (Math.abs(newScaleX) > 0) {
      this.etX = 0;
    }
    if (Math.abs(newScaleY) > 0) {
      this.etY = 0;
    }
    if (Math.abs(this.scale.x) - Math.abs(newScaleX) <= 0) {
      newScaleX = this.scale.x;
    }
    if (Math.abs(this.scale.y) - Math.abs(newScaleY) <= 0) {
      newScaleY = this.scale.y;
    }
    this.scale.x -= newScaleY;
    this.scale.y -= newScaleY;
    this.owner.scaleXTo(this.owner.scaleX() + newScaleX);
    this.owner.scaleYTo(this.owner.scaleY() + newScaleY);
    return XCScaleAction.__super__.tick.call(this, dt);
  };
  return XCScaleAction;
}();
XCScaleToAction = function() {
  function XCScaleToAction(duration, scale) {
    this.scale = scale;
    XCScaleToAction.__super__.constructor.call(this, duration, "XCScaleTo");
  }
  __extends(XCScaleToAction, XCScaleAction);
  XCScaleToAction.prototype.tick = function(dt) {
    if (this.firstTick) {
      this.scale.x -= this.owner.scaleX();
      this.scale.y -= this.owner.scaleY();
      this.stepScaleX = this.scale.x / this.duration;
      this.stepScaleY = this.scale.y / this.duration;
      this.firstTick = false;
    }
    return XCScaleToAction.__super__.tick.call(this, dt);
  };
  return XCScaleToAction;
}();
XCScaleByAction = function() {
  function XCScaleByAction(duration, scale) {
    this.scale = scale;
    XCScaleByAction.__super__.constructor.call(this, duration, "XCScaleTo");
  }
  __extends(XCScaleByAction, XCScaleAction);
  XCScaleByAction.prototype.tick = function(dt) {
    if (this.firstTick) {
      this.scale.x = (this.scale.x * this.owner.scaleX()) - this.owner.scaleX();
      this.scale.y = (this.scale.y * this.owner.scaleY()) - this.owner.scaleX();
      this.stepScaleX = this.scale.x / this.duration;
      this.stepScaleY = this.scale.y / this.duration;
      this.firstTick = false;
    }
    return XCScaleByAction.__super__.tick.call(this, dt);
  };
  return XCScaleByAction;
}();
XCRotateAction = function() {
  function XCRotateAction(duration, name) {
    XCRotateAction.__super__.constructor.call(this, duration, name);
    this.et = 0;
  }
  __extends(XCRotateAction, XCIntervalAction);
  XCRotateAction.prototype.tick = function(dt) {
    var rotation;
    this.et += dt;
    rotation = this.et * this.stepAngle;
    if (Math.abs(rotation) > 0) {
      this.et = 0;
    }
    if (this.positiveRotation && (this.angle - rotation <= 0)) {
      rotation = this.angle;
    } else if ((!this.positiveRotation) && this.angle - rotation >= 0) {
      rotation = this.angle;
    }
    this.angle -= rotation;
    this.owner.rotateBy(rotation);
    return XCRotateAction.__super__.tick.call(this, dt);
  };
  return XCRotateAction;
}();
XCRotateToAction = function() {
  function XCRotateToAction(duration, angle) {
    this.angle = angle;
    XCRotateToAction.__super__.constructor.call(this, duration, "XCRotateTo");
    this.firstTick = true;
  }
  __extends(XCRotateToAction, XCRotateAction);
  XCRotateToAction.prototype.tick = function(dt) {
    if (this.firstTick) {
      this.angle -= this.owner.rotation();
      this.stepAngle = this.angle / this.duration;
      this.positiveRotation = this.angle > 0;
      this.firstTick = false;
    }
    return XCRotateToAction.__super__.tick.call(this, dt);
  };
  return XCRotateToAction;
}();
XCRotateByAction = function() {
  function XCRotateByAction(duration, angle) {
    this.angle = angle;
    XCRotateByAction.__super__.constructor.call(this, duration, "XCRotateBy");
    this.stepAngle = this.angle / this.duration;
    this.positiveRotation = this.angle > 0;
  }
  __extends(XCRotateByAction, XCRotateAction);
  return XCRotateByAction;
}();
XCMoveAction = function() {
  function XCMoveAction(duration, name) {
    XCMoveAction.__super__.constructor.call(this, duration, name);
    this.etX = 0;
    this.etY = 0;
  }
  __extends(XCMoveAction, XCIntervalAction);
  XCMoveAction.prototype.tick = function(dt) {
    var moveX, moveY;
    this.etX += dt;
    this.etY += dt;
    moveX = this.etX * this.stepX;
    moveY = this.etY * this.stepY;
    if (Math.abs(moveX) > 0) {
      this.etX = 0;
    }
    if (Math.abs(moveY) > 0) {
      this.etY = 0;
    }
    if (this.positiveX && (this.x - moveX < 0)) {
      moveX = this.x;
    } else if ((!this.positiveX) && (this.x - moveX > 0)) {
      moveX = this.x;
    }
    if (this.positiveY && (this.y - moveY < 0)) {
      moveY = this.y;
    } else if ((!this.positiveY) && (this.y - moveY > 0)) {
      moveY = this.y;
    }
    this.x -= moveX;
    this.y -= moveY;
    this.owner.moveBy(moveX, moveY);
    return XCMoveAction.__super__.tick.call(this, dt);
  };
  return XCMoveAction;
}();
XCMoveToAction = function() {
  function XCMoveToAction(duration, x, y) {
    this.x = x;
    this.y = y;
    XCMoveToAction.__super__.constructor.call(this, duration, "XCMoveTo");
    this.firstTick = true;
  }
  __extends(XCMoveToAction, XCMoveAction);
  XCMoveToAction.prototype.tick = function(dt) {
    if (this.firstTick) {
      this.x -= this.owner.X();
      this.y -= this.owner.Y();
      this.stepX = this.x / this.duration;
      this.stepY = this.y / this.duration;
      this.positiveX = this.stepX > 0;
      this.positiveY = this.stepY > 0;
      this.firstTick = false;
    }
    return XCMoveToAction.__super__.tick.call(this, dt);
  };
  return XCMoveToAction;
}();
XCMoveByAction = function() {
  function XCMoveByAction(duration, x, y) {
    this.x = x;
    this.y = y;
    XCMoveByAction.__super__.constructor.call(this, duration, "XCMoveBy");
    this.stepX = this.x / this.duration;
    this.stepY = this.y / this.duration;
    this.positiveX = this.stepX > 0;
    this.positiveY = this.stepY > 0;
  }
  __extends(XCMoveByAction, XCMoveAction);
  return XCMoveByAction;
}();
XCEvent = function() {
  function XCEvent(name) {
    this.name = name;
  }
  return XCEvent;
}();
XCTapDownEvent = function() {
  function XCTapDownEvent(x, y, tapNumber) {
    this.tapNumber = tapNumber;
    this.point = {
      x: x,
      y: y
    };
    XCTapDownEvent.__super__.constructor.call(this, "tapDown");
  }
  __extends(XCTapDownEvent, XCEvent);
  return XCTapDownEvent;
}();
XCTapMovedEvent = function() {
  function XCTapMovedEvent(x, y, moveX, moveY, tapNumber) {
    this.tapNumber = tapNumber;
    this.point = {
      x: x,
      y: y
    };
    this.move = {
      x: moveX,
      y: moveY
    };
    XCTapMovedEvent.__super__.constructor.call(this, "tapMoved");
  }
  __extends(XCTapMovedEvent, XCEvent);
  return XCTapMovedEvent;
}();
XCTapUpEvent = function() {
  function XCTapUpEvent(x, y, tapNumber) {
    this.tapNumber = tapNumber;
    this.point = {
      x: x,
      y: y
    };
    XCTapUpEvent.__super__.constructor.call(this, "tapUp");
  }
  __extends(XCTapUpEvent, XCEvent);
  return XCTapUpEvent;
}();
XCKeyDownEvent = function() {
  function XCKeyDownEvent(key) {
    this.key = key;
    XCKeyDownEvent.__super__.constructor.call(this, "keyDown");
  }
  __extends(XCKeyDownEvent, XCEvent);
  return XCKeyDownEvent;
}();
XCKeyUpEvent = function() {
  function XCKeyUpEvent(key) {
    this.key = key;
    XCKeyUpEvent.__super__.constructor.call(this, "keyUp");
  }
  __extends(XCKeyUpEvent, XCEvent);
  return XCKeyUpEvent;
}();
XCDelayAction = function() {
  function XCDelayAction(duration) {
    XCDelayAction.__super__.constructor.call(this, duration, 'XCDelayAction');
  }
  __extends(XCDelayAction, XCIntervalAction);
  return XCDelayAction;
}();
XCCallFuncAction = function() {
  function XCCallFuncAction(fn) {
    this.fn = fn;
    XCCallFuncAction.__super__.constructor.call(this, "XCCallFuncAction");
  }
  __extends(XCCallFuncAction, XCAction);
  XCCallFuncAction.prototype.tick = function(dt) {
    this.fn();
    return false;
  };
  return XCCallFuncAction;
}();
XCButtonNode = function() {
  function XCButtonNode(imageName) {
    XCButtonNode.__super__.constructor.call(this, imageName);
    xc.addEventListener('tapDown', this);
    xc.addEventListener('tapUp', this);
    xc.addEventListener('tapMoved', this);
  }
  __extends(XCButtonNode, XCSpriteNode);
  XCButtonNode.prototype.tapDown = function(event) {
    if (xc.rectContainsPoint(this.rect(), event.point)) {
      this.tapStarted = true;
      return this.onTapStart(event.point);
    }
  };
  XCButtonNode.prototype.tapMoved = function(event) {
    if (!xc.rectContainsPoint(this.rect(), event.point)) {
      return this.onTapLeave(event.point);
    }
  };
  XCButtonNode.prototype.tapUp = function(event) {
    if (this.tapStarted && xc.rectContainsPoint(this.rect(), event.point)) {
      this.onHit(event.point);
    }
    return this.tapStarted = false;
  };
  XCButtonNode.prototype.onTapStart = function(point) {};
  XCButtonNode.prototype.onTapLeave = function(point) {};
  XCButtonNode.prototype.onHit = function(point) {};
  return XCButtonNode;
}();
XC = function() {
  function XC() {
    this._scenes = [];
    this._scenes.push(new XCScene('DefaultScene'));
    this._events = [];
  }
  XC.prototype.addEventListener = function(eventName, listener) {
    var message;
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }
    if (this._events[eventName].indexOf(listener) === -1) {
      return this._events[eventName].push(listener);
    } else {
      message = 'The event listener for ' + eventName + ' ' + listener + ' was already added';
      throw {
        name: 'EventListenerAlreadyAddedError',
        message: message
      };
    }
  };
  XC.prototype.removeEventListener = function(eventName, listener) {
    var message, pos;
    if ((this._events[eventName] != null) && (pos = this._events[eventName].indexOf(listener)) !== -1) {
      return this._events[eventName] = this._events[eventName].slice(0, pos).concat(this._events[eventName].slice(pos + 1, this._events[eventName].length - 1 + 1));
    } else {
      message = 'There is no listener for ' + eventName + ' ' + listener;
      throw {
        name: 'NoSuchEventListenerError',
        message: message
      };
    }
  };
  XC.prototype.clearEvents = function() {
    return this._events = [];
  };
  XC.prototype.dispatchEvent = function(event) {
    var listener, _i, _len, _ref, _results;
    if (this._events[event.name] != null) {
      _ref = this._events[event.name];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        listener = _ref[_i];
        _results.push(listener[event.name](event));
      }
      return _results;
    }
  };
  XC.prototype.replaceScene = function(newScene) {
    var oldScene;
    if (this._scenes.indexOf(newScene) === -1) {
      oldScene = this._scenes.pop().close();
      this._scenes.push(newScene);
      return oldScene;
    } else {
      throw {
        name: 'DuplicateSceneError',
        message: 'Cannot replace a scene with itself'
      };
    }
  };
  XC.prototype.pushScene = function(newScene) {
    if (this._scenes.indexOf(newScene) === -1) {
      return this._scenes.push(newScene);
    } else {
      throw {
        name: 'DuplicateSceneError',
        message: 'Cannot put a scene on the stack twice'
      };
    }
  };
  XC.prototype.popScene = function() {
    var oldScene;
    if (this._scenes.length > 1) {
      oldScene = this._scenes.pop();
      oldScene.close();
      return oldScene;
    } else {
      throw {
        name: 'PoppedLastSceneError',
        message: 'Can\'t pop with one scene left'
      };
    }
  };
  XC.prototype.getCurrentScene = function() {
    return this._scenes[this._scenes.length - 1];
  };
  XC.prototype.rectContainsPoint = function(rect, point) {
    return (point.x > rect.x) && (point.x < (rect.x + rect.w)) && (point.y > rect.y) && (point.y < (rect.y + rect.h));
  };
  return XC;
}();