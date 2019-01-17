let formModule = (function() {
	const initForm = function() {
		console.log("Let's check the form!")
		console.log('Hi there')
	}

	return {
		initForm: initForm,
	}
})()

document.addEventListener('DOMContentLoaded', function() {
	formModule.initForm()
})
<<<<<<< Updated upstream

/*
$title = 'Contact van ' . $yourname . ' over ' . $yoursubject;
		$message = $yourmessage . '   \n Met het e-mailadres: <mailto:' . $youremail . '|' . $youremail . '> ' . $youremail . '.';

		// $headers = array('From: ' . $yourname . ' <' . $youremail . '>');

		$contact = [
			'markdown' => true,
			'title' => $title,
			'text' => $message
		];

		$response = wp_remote_post(
			'https://outlook.office.com/webhook/276f5711-8096-4d28-8b4c-3390fd10aa42@4ded4bb1-6bff-42b3-aed7-6a36a503bf7a/IncomingWebhook/a86d92acb4e640c7abfaee1076027bd9/7f736be6-110b-4114-bb51-adde29c36a17',
			[
				'method' => 'POST',
				'body' => json_encode( $contact )
			]
		);

		if ( $response['response']['code'] == 200 ) {
			echo '<script type="text/javascript">window.location = "https://mct.be/bedankt/";</script>';
		}*/
=======
>>>>>>> Stashed changes
