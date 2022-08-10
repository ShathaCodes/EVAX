package com.Backend.controllers;

import java.util.Calendar;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Backend.models.User;
import com.Backend.repositories.UserRepository;

@RestController
@RequestMapping(path = "/users")
@CrossOrigin
public class MainController {

	@Autowired
	private UserRepository userRepository;
	
	private Logger logger = LoggerFactory.getLogger(MainController.class);

	@PostMapping("/create")
	public User create(@RequestBody User user) {
		logger.info("POST /create");
		user.setVaccinationDate(scheduleDate());
		user.setVaccinated(false);
		return userRepository.save(user);
	}

	@GetMapping(path = "/vaccinated")
	public long getVacinatedUsers() {
		logger.info("GET /vaccinated");
		return userRepository.countByVaccinated(true);
	}
	
	@GetMapping()
	public long getAllUsers() {
		logger.info("GET /");
		return userRepository.count();
	}

	@PutMapping("/update/{id}")
	public User update(@PathVariable int id) {
		logger.info("PUT /update/"+id);
		User user = userRepository.findById(id).get();
		user.setVaccinated(true);
		return userRepository.save(user);

	}

	private Date scheduleDate() {
		logger.info("__scheduleDate");
		Date dateOfOrder = new Date(); // current date
		int noOfDays = 7;
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(dateOfOrder);
		calendar.add(Calendar.DAY_OF_YEAR, noOfDays);
		calendar.set(Calendar.HOUR_OF_DAY, 0);
		Date date = calendar.getTime();
		return date;
	}

}