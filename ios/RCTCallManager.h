// CallManager.h
#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#if __has_include("React/RCTBridgeModule.h")
#import "React/RCTBridgeModule.h"
#endif
#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#endif

@interface RCTCallManager : NSObject <RCTBridgeModule>
@end
