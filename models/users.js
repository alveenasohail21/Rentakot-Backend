/**
 * Created by rohail on 1/12/2017.
 */

module.exports = function(Schema){

   return new Schema({
     aboutme : {
       type : String,
       currentProducts : [{
         type : Schema.Types.ObjectId,
         ref : 'Product'
       }],
       unlistedProducts : [{
         type : Schema.Types.ObjectId,
         ref : 'Product'
       }],
       currentRentedProducts : [{
         type : Schema.Types.ObjectId,
         ref : 'Product'
       }],
       userId : {
         type : String
       },
       conversation : [ {
         type : Schema.Types.ObjectId,
         ref : 'Conversation'
       }],
       billingInfo : [{
         type : String
       }],
       shippingInfo : [{
         type : String
       }],
       rentedOutOrders : [{
         type : string
       }],
       rentedOrders : [{
         type : string
       }],
       reviews : [{
         type : Schema.Types.ObjectId,
         ref : 'Review'
       }],
       notifications : [{
         type : Schema.Types.ObjectId,
         ref : 'Notification'
       }]
     }
  });

};