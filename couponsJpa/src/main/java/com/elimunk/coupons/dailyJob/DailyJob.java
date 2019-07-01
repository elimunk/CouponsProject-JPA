package com.elimunk.coupons.dailyJob;

import java.util.Timer;
import java.util.TimerTask;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.elimunk.coupons.dao.ICouponsDao;

@Component
public class DailyJob extends TimerTask {

	private Timer timer;
	@Autowired
	private DailyJob timerTask;
	@Autowired
	private ICouponsDao couponDao;
	
	private boolean isJObRunning = false;

	public DailyJob() {
	}

	// run is function that defined for the task
	// that will be start by the timer every time that defined at the timer
	public void run() {
		try {
			// Delete all expired coupons
			couponDao.deleteByEndDate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// this function start the job , contains the timer for schedule the task
	@PostConstruct
	public void startDailyJob() {
		// Define the task with the job

		// Creating a timer
		this.timer = new Timer();

		// Tell the timer to run the task every 24 hours, starting now *60*24
		this.timer.scheduleAtFixedRate(this.timerTask, 0, 1000*60*60*24);
		isJObRunning = true;
		System.out.println("~Daily task started~");
	}

	// this function stop the job by the cancel the timer
	public void stopDailyJob() {
		// stop the task
		this.timer.cancel();
		isJObRunning = false;
		System.out.println("~Daily task cancelled~");
	}

	public boolean getIsJObRunning() {
		return isJObRunning;
	}

	public void setJObRunning(boolean isJObRunning) {
		this.isJObRunning = isJObRunning;
	}

}
