// CallManager.m
#import "RCTCallManager.h"
#import <UIKit/UIKit.h>

@implementation RCTCallManager
RCT_EXPORT_MODULE();

// Exports call method to JS
RCT_EXPORT_METHOD(call:(NSString *)phoneNumberToCall)
{
  NSString* phoneNumber = [phoneNumberToCall stringByReplacingOccurrencesOfString:@" " withString:@""];
  
  NSURL* phoneURL = [NSURL URLWithString:[@"telprompt://" stringByAppendingString:phoneNumber]];
  NSURL* phoneFallbackUrl = [NSURL URLWithString:[@"tel://" stringByAppendingString:phoneNumber]];
  
  if ([UIApplication.sharedApplication canOpenURL:phoneURL]) {
    dispatch_async(dispatch_get_main_queue(), ^{
      [[UIApplication sharedApplication] openURL:phoneURL];
    });
  } else if ([UIApplication.sharedApplication canOpenURL:phoneFallbackUrl]) {
    [[UIApplication sharedApplication] openURL:phoneFallbackUrl];
  }
}

@end
