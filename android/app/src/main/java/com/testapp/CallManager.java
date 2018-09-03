package com.testapp;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.support.v4.app.ActivityCompat;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Locale;

public class CallManager extends ReactContextBaseJavaModule {

    ReactContext mContext;

    public CallManager(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mContext = reactContext;
    }

    @Override
    public String getName() {
        return "CallManager";
    }

    @ReactMethod
    public void call(String number) {

        if (Build.VERSION.SDK_INT < 23) {
            phoneCall(number);
        }
        else {
            if (ActivityCompat.checkSelfPermission(this.mContext, Manifest.permission.CALL_PHONE) == PackageManager.PERMISSION_GRANTED) {
                phoneCall(number);
            }
            else {
                final String[] PERMISSIONS_STORAGE = {Manifest.permission.CALL_PHONE};
                ActivityCompat.requestPermissions(this.mContext.getCurrentActivity(), PERMISSIONS_STORAGE, 9);
            }
        }
    }

    private void phoneCall(String number) {
        String phoneNumber;

        if (ActivityCompat.checkSelfPermission(this.mContext, Manifest.permission.CALL_PHONE) == PackageManager.PERMISSION_GRANTED) {
            Intent callIntent = new Intent(Intent.ACTION_CALL);
            phoneNumber = number.trim();
            callIntent.setData(Uri.parse("tel:" + phoneNumber));

            this.mContext.startActivity(callIntent);
        }
    }
}
