package com.elimunk.coupons.dailyJob;

import java.util.Timer;
import java.util.TimerTask;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.elimunk.coupons.dao.ICouponsDao;
import com.elimunk.coupons.dao.IDiscountDao;
import com.elimunk.coupons.enums.ErrorTypes;
import com.elimunk.coupons.exceptions.ApplicationException;
import com.elimunk.coupons.utils.DateUtils;

@Component
public class DailyJob extends TimerTask {

	// Properties

	private Timer timer;
	@Autowired
	private DailyJob timerTask;
	@Autowired
	private ICouponsDao couponDao;
	@Autowired
	private IDiscountDao discountDao;

	private boolean isJObRunning = false;

	// constructor

	public DailyJob() {
	}

	// setters & getters
	
	public boolean getIsJObRunning() {
		return isJObRunning;
	}
	
	public void setJObRunning(boolean isJObRunning) {
		this.isJObRunning = isJObRunning;
	}
	
	// methods

	// this function will be start by the timer every time that defined at the timer
	public void run(){
		try {
			// Delete all expired coupons
			couponDao.deleteByEndDate();
			// Delete all expired discounts
			discountDao.deleteByExpired();
		} catch (Exception e) {
			try {
				e.printStackTrace();
				throw new ApplicationException(ErrorTypes.GENERAL_ERROR, DateUtils.getCurrentDateAndTime(),
						"The job is failed.", true);
			} catch (Exception e1) {
				e1.printStackTrace();
			}
		}
	}

	// this function start the job , contains the timer for schedule the task
	@PostConstruct
	public void startDailyJob() {

		// Creating a timer
		this.timer = new Timer();

		// Tell the timer to run the task every 24 hours, starting now
		this.timer.scheduleAtFixedRate(this.timerTask, 0, 1000 * 60 * 60 * 24);
		isJObRunning = true;
		System.out.println("~Daily task started~");
	}

	// this function stop the job by the cancel the timer
	public void stopDailyJob() {
		// cancel the timer
		this.timer.cancel();
		isJObRunning = false;
		System.out.println("~Daily task cancelled~");
	}


}
