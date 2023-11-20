const DeviceDetector = require("node-device-detector");
const DeviceHelper = require("node-device-detector/helper");

const User = require("../schemas/UserSchema");

const ph = require("../utils/hash");
const { logAccess } = require("../middlewares/analytics");
const TokenProcessor = require("../utils/tokenProcessor");
const SendResponses = require("../utils/sendResponses");
const Patterns = require("../templates/PatternTemplates");
const SendNotifications = require("../utils/sendNotifications");
const HelperUtils = require("../utils/HelperUtils");
const HttpStatusCode = require("../error-helpers/Statuscode");

const cloudUploader = require("../utils/upload");
const winston = require("../error-helpers/WistonLogger");
const Access = require("../core/roles/AccessHandler");
const PaymentHandler = require("../core/payment/PaymentHandler");

const DataRepo = require("../database/DataRepo");
const DataSource = require("../database/DataSource");

const {
  createToken, verifyToken, createHashedToken, verifyHashedToken
} = TokenProcessor;
const { APP_ROLES, VALID_APP_ROLES } = Access;
const { sendSuccessResponse, sendErrorResponse } = SendResponses;
const { sendPushNotificationToTopic, sendEmail } = SendNotifications;
const {
  customDate, customDate2, formatDateAsTime, DEFAULT_FILTERS
} = HelperUtils;

const HtmlTemplates = require("../templates/HtmlTemplates");

const {
  staticUploadPath,
  TRANSACTION_TYPES,
  BONUS_STATUSES,
  BONUS_TYPES,
  SUSPENSION_TYPES,
  WALLET_TYPES,
  DRAW_METHODS,
  gameCategoriesOptions,
  weekDayNames,
  gameCategories,
  MAX_SELECTION_ALLOWED,
  WINNING_REDEMPTION_METHODS
} = require("../globals");

const deviceDetector = new DeviceDetector({
  clientIndexes: true,
  deviceIndexes: true,
  deviceAliasCode: false,
});

const dataRepo = new DataRepo();
const dataSource = new DataSource(dataRepo);
const datasource = dataSource;

module.exports = {
  APP_ROLES,
  VALID_APP_ROLES,
  TRANSACTION_TYPES,
  BONUS_STATUSES,
  BONUS_TYPES,
  SUSPENSION_TYPES,
  WALLET_TYPES,
  DRAW_METHODS,
  DEFAULT_FILTERS,
  WINNING_REDEMPTION_METHODS,
  MAX_SELECTION_ALLOWED,
  staticUploadPath,
  weekDayNames,
  gameCategoriesOptions,
  gameCategories,
  Patterns,
  HttpStatusCode,
  HtmlTemplates,
  ph,
  HelperUtils,
  customDate,
  customDate2,
  formatDateAsTime,
  createToken,
  createHashedToken,
  verifyToken,
  verifyHashedToken,
  sendErrorResponse,
  sendSuccessResponse,
  sendPushNotificationToTopic,
  sendEmail,
  winston,
  logAccess,
  AccessHandler: Access,
  PaymentHandler,
  cloudUploader,
  User,
  datasource,
  deviceDetector,
  DeviceHelper,
};