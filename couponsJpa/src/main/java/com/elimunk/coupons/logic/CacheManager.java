package com.elimunk.coupons.logic;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.elimunk.coupons.beans.PostLoginUserData;

@Component
public class CacheManager implements ICacheManager{
		
		private Map<Object , Object> map;
		
		public CacheManager() {
			this.map = new HashMap<>();
		}

		@Override
		public void put(Object token, Object postLoginUserData ) {
			this.map.put(token,  postLoginUserData);
		}

		@Override
		public Object get(Object token) {
			return this.map.get(token);
		}
}
